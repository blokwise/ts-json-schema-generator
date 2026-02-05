import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'

export class SatisfiesNodeParser implements SubNodeParser {
  public constructor(protected childNodeParser: NodeParser) {}

  public supportsNode(node: ts.SatisfiesExpression): boolean {
    return node.kind === ts.SyntaxKind.SatisfiesExpression
  }

  public createType(node: ts.SatisfiesExpression, context: Context): BaseType {
    return this.childNodeParser.createType(node.expression, context)
  }
}
