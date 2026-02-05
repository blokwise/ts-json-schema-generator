import type { Context } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { UndefinedType } from '../Type/UndefinedType'

export class UndefinedTypeNodeParser implements SubNodeParser {
  public supportsNode(node: ts.KeywordTypeNode): boolean {
    return node.kind === ts.SyntaxKind.UndefinedKeyword
  }

  public createType(_node: ts.KeywordTypeNode, _context: Context): BaseType {
    return new UndefinedType()
  }
}
