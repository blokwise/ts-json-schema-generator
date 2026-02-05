import type { Context } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { VoidType } from '../Type/VoidType'

export class VoidTypeNodeParser implements SubNodeParser {
  public supportsNode(node: ts.KeywordTypeNode): boolean {
    return node.kind === ts.SyntaxKind.VoidKeyword
  }

  public createType(_node: ts.KeywordTypeNode, _context: Context): BaseType {
    return new VoidType()
  }
}
