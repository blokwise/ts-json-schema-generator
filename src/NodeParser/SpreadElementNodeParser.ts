import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { ArrayType } from '../Type/ArrayType'
import type { InferType } from '../Type/InferType'
import type { TupleType } from '../Type/TupleType'
import ts from 'typescript'
import { RestType } from '../Type/RestType'

/**
 * Handles `...expr` inside an ArrayLiteralExpression.
 * Turns it into RestType so TupleTypeFormatter can emit correct JSON-Schema.
 */
export class SpreadElementNodeParser implements SubNodeParser {
  constructor(private readonly childNodeParser: NodeParser) {}

  supportsNode(node: ts.SpreadElement): boolean {
    return node.kind === ts.SyntaxKind.SpreadElement
  }

  createType(node: ts.SpreadElement, context: Context) {
    const inner = this.childNodeParser.createType(node.expression, context) as ArrayType | InferType | TupleType

    return new RestType(inner)
  }
}
