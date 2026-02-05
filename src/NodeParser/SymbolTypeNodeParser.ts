import type { Context } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { SymbolType } from '../Type/SymbolType'

export class SymbolTypeNodeParser implements SubNodeParser {
  public supportsNode(node: ts.KeywordTypeNode): boolean {
    return node.kind === ts.SyntaxKind.SymbolKeyword
  }

  public createType(_node: ts.KeywordTypeNode, _context: Context): BaseType {
    return new SymbolType()
  }
}
