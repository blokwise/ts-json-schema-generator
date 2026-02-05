import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import type { ReferenceType } from '../Type/ReferenceType'
import ts from 'typescript'
import { AliasType } from '../Type/AliasType'
import { NeverType } from '../Type/NeverType'
import { getKey } from '../Utils/nodeKey'

export class TypeAliasNodeParser implements SubNodeParser {
  public constructor(
    protected typeChecker: ts.TypeChecker,
    protected childNodeParser: NodeParser,
  ) {}

  public supportsNode(node: ts.TypeAliasDeclaration): boolean {
    return node.kind === ts.SyntaxKind.TypeAliasDeclaration
  }

  public createType(node: ts.TypeAliasDeclaration, context: Context, reference?: ReferenceType): BaseType {
    if (node.typeParameters?.length) {
      for (const typeParam of node.typeParameters) {
        const nameSymbol = this.typeChecker.getSymbolAtLocation(typeParam.name)!
        context.pushParameter(nameSymbol.name)

        if (typeParam.default) {
          const type = this.childNodeParser.createType(typeParam.default, context)
          context.setDefault(nameSymbol.name, type)
        }
      }
    }

    const id = this.getTypeId(node, context)
    const name = this.getTypeName(node, context)
    if (reference) {
      reference.setId(id)
      reference.setName(name)
    }

    const typeOfImportString = ((() => {
      const typeRefence = this.getTypeReference(context)
      if (typeRefence) {
        const importStatement = this.getImportStatement(typeRefence.getSourceFile(), name)
        if (importStatement) {
          return this.getTypeOfImportString(importStatement, name)
        }
      }
    })())

    const type = this.childNodeParser.createType(node.type, context)
    if (type instanceof NeverType) {
      return new NeverType()
    }

    return new AliasType(id, type, typeOfImportString)
  }

  protected getTypeId(node: ts.TypeAliasDeclaration, context: Context): string {
    return `alias-${getKey(node, context)}`
  }

  protected getTypeName(node: ts.TypeAliasDeclaration, context: Context): string {
    const argumentIds = context.getArguments().map(arg => arg?.getName())
    const fullName = node.name.getText()

    return argumentIds.length ? `${fullName}<${argumentIds.join(',')}>` : fullName
  }

  protected getTypeReference(context: Context) {
    const reference = context.getReference()

    if (reference && reference.kind === ts.SyntaxKind.TypeReference) {
      return reference
    }
  }

  protected getImportStatement(sourceFile: ts.SourceFile, typeName: string): ts.ImportDeclaration & { importClause: ts.ImportClause } | undefined {
    return (sourceFile.statements ?? [])
      .filter(s => ts.isImportDeclaration(s) && s.importClause && ts.isImportClause(s.importClause))
      .map(s => s as ts.ImportDeclaration & { importClause: ts.ImportClause })
      .find(stmt => !!this.getTypeOfImportString(stmt, typeName))
  }

  protected getModuleSpecifier(node: ts.ImportDeclaration): string | undefined {
    const moduleSpecifier = node.moduleSpecifier

    if (moduleSpecifier) {
      return moduleSpecifier.getText()
    }
  }

  protected getTypeOfImportString(node: ts.ImportDeclaration & { importClause: ts.ImportClause }, typeName: string): string | undefined {
    const { name, namedBindings } = node.importClause

    // default import
    if (name && name.text === typeName) {
      const moduleSpecifier = this.getModuleSpecifier(node)
      return `typeof import(${moduleSpecifier})`
    }

    // named imports
    if (namedBindings && ts.isNamedImports(namedBindings) && namedBindings.elements.some(element => element.name.text === typeName)) {
      const moduleSpecifier = this.getModuleSpecifier(node)
      return `typeof import(${moduleSpecifier}).${typeName}`
    }
  }
}
