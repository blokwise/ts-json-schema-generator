import type { Context } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { NullType } from '../Type/NullType'

export class UndefinedLiteralNodeParser implements SubNodeParser {
  public supportsNode(node: ts.KeywordTypeNode): boolean {
    return node.kind === ts.SyntaxKind.UndefinedKeyword
  }

  public createType(_node: ts.KeywordTypeNode, _context: Context): BaseType {
    return new NullType()
  }
}
