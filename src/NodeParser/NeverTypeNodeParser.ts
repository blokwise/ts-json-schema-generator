import type { Context } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { NeverType } from '../Type/NeverType'

export class NeverTypeNodeParser implements SubNodeParser {
  public supportsNode(node: ts.KeywordTypeNode): boolean {
    return node.kind === ts.SyntaxKind.NeverKeyword
  }

  public createType(_node: ts.KeywordTypeNode, _context: Context): BaseType {
    return new NeverType()
  }
}
