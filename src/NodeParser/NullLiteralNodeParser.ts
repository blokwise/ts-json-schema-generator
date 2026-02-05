import type { Context } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { NullType } from '../Type/NullType'

export class NullLiteralNodeParser implements SubNodeParser {
  public supportsNode(node: ts.NullLiteral): boolean {
    return node.kind === ts.SyntaxKind.NullKeyword
  }

  public createType(_node: ts.NullLiteral, _context: Context): BaseType {
    return new NullType()
  }
}
