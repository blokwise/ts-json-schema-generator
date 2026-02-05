import type { Context } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { LiteralType } from '../Type/LiteralType'

export class BooleanLiteralNodeParser implements SubNodeParser {
  public supportsNode(node: ts.BooleanLiteral): boolean {
    return node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword
  }

  public createType(node: ts.BooleanLiteral, _context: Context): BaseType {
    return new LiteralType(node.kind === ts.SyntaxKind.TrueKeyword)
  }
}
