import type { Context } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { LiteralType } from '../Type/LiteralType'

export class NumberLiteralNodeParser implements SubNodeParser {
  public supportsNode(node: ts.NumericLiteral): boolean {
    return node.kind === ts.SyntaxKind.NumericLiteral
  }

  public createType(node: ts.NumericLiteral, _context: Context): BaseType {
    return new LiteralType(Number.parseFloat(node.text))
  }
}
