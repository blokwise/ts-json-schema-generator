import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { OptionalType } from '../Type/OptionalType'

export class OptionalTypeNodeParser implements SubNodeParser {
  public constructor(protected childNodeParser: NodeParser) {}
  public supportsNode(node: ts.OptionalTypeNode): boolean {
    return node.kind === ts.SyntaxKind.OptionalType
  }

  public createType(node: ts.OptionalTypeNode, context: Context): BaseType {
    const type = this.childNodeParser.createType(node.type, context)
    return new OptionalType(type)
  }
}
