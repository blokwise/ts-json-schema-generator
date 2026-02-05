import type { Context } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { LiteralType } from '../Type/LiteralType'

export class StringLiteralNodeParser implements SubNodeParser {
  public supportsNode(node: ts.StringLiteral): boolean {
    return node.kind === ts.SyntaxKind.StringLiteral
  }

  public createType(node: ts.StringLiteral, _context: Context): BaseType {
    return new LiteralType(node.text)
  }
}
