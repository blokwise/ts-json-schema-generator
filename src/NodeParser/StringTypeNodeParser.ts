import type { Context } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { StringType } from '../Type/StringType'

export class StringTypeNodeParser implements SubNodeParser {
  public supportsNode(node: ts.KeywordTypeNode): boolean {
    return node.kind === ts.SyntaxKind.StringKeyword
  }

  public createType(_node: ts.KeywordTypeNode, _context: Context): BaseType {
    return new StringType()
  }
}
