import type { NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { UnknownNodeError } from '../Error/Errors'
import { Context } from '../NodeParser'

export class NewExpressionParser implements SubNodeParser {
  public constructor(
    protected typeChecker: ts.TypeChecker,
    protected childNodeParser: NodeParser,
  ) {}

  public supportsNode(node: ts.NewExpression): boolean {
    return node.kind === ts.SyntaxKind.NewExpression
  }

  public createType(node: ts.NewExpression, context: Context): BaseType {
    const type = this.typeChecker.getTypeAtLocation(node)

    const symbol = type.symbol || type.aliasSymbol

    const decl
      = this.typeChecker.typeToTypeNode(type, node, ts.NodeBuilderFlags.IgnoreErrors)
        || symbol?.valueDeclaration
        || symbol?.declarations?.[0]

    if (!decl) {
      throw new UnknownNodeError(node)
    }

    return this.childNodeParser.createType(decl, this.createSubContext(node, context))
  }

  protected createSubContext(node: ts.NewExpression, parentContext: Context): Context {
    const subContext = new Context(node)

    if (node.arguments) {
      for (const arg of node.arguments) {
        const type = this.childNodeParser.createType(arg, parentContext)
        subContext.pushArgument(type)
      }
    }
    return subContext
  }
}
