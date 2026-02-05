import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { UnknownType } from '../Type/UnknownType'

export class UnknownTypeNodeParser implements SubNodeParser {
  public supportsNode(node: ts.KeywordTypeNode): boolean {
    return node.kind === ts.SyntaxKind.UnknownKeyword
  }

  public createType(): BaseType {
    return new UnknownType(false)
  }
}
