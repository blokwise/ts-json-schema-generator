import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'

export class PropertyAccessExpressionParser implements SubNodeParser {
  public constructor(
    protected typeChecker: ts.TypeChecker,
    protected childNodeParser: NodeParser,
  ) {}

  public supportsNode(node: ts.PropertyAccessExpression): boolean {
    return node.kind === ts.SyntaxKind.PropertyAccessExpression
  }

  public createType(node: ts.PropertyAccessExpression, context: Context): BaseType {
    const type = this.typeChecker.getTypeAtLocation(node)
    return this.childNodeParser.createType(type.symbol.declarations![0], context)
  }
}
