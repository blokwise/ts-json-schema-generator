import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'

export class ParameterParser implements SubNodeParser {
  constructor(protected childNodeParser: NodeParser) {}

  public supportsNode(node: ts.ParameterDeclaration): boolean {
    return node.kind === ts.SyntaxKind.Parameter
  }

  public createType(node: ts.FunctionTypeNode, context: Context): BaseType {
    return this.childNodeParser.createType(node.type, context)
  }
}
