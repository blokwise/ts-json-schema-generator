import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { ArrayType } from '../Type/ArrayType'
import type { BaseType } from '../Type/BaseType'
import type { InferType } from '../Type/InferType'
import type { TupleType } from '../Type/TupleType'
import ts from 'typescript'
import { RestType } from '../Type/RestType'

export class RestTypeNodeParser implements SubNodeParser {
  public constructor(protected childNodeParser: NodeParser) {}
  public supportsNode(node: ts.RestTypeNode): boolean {
    return node.kind === ts.SyntaxKind.RestType
  }

  public createType(node: ts.RestTypeNode, context: Context): BaseType {
    return new RestType(this.childNodeParser.createType(node.type, context) as ArrayType | InferType | TupleType)
  }
}
