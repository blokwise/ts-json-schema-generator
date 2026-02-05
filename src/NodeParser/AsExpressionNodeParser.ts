import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'

export class AsExpressionNodeParser implements SubNodeParser {
  public constructor(protected childNodeParser: NodeParser) {}

  public supportsNode(node: ts.AsExpression): boolean {
    return node.kind === ts.SyntaxKind.AsExpression
  }

  public createType(node: ts.AsExpression, context: Context): BaseType {
    // only implement `as const` for now where we just ignore the as expression
    return this.childNodeParser.createType(node.expression, context)
  }
}
