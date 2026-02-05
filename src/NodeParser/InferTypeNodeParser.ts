import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { InferType } from '../Type/InferType'

export class InferTypeNodeParser implements SubNodeParser {
  public constructor(
    protected typeChecker: ts.TypeChecker,
    protected childNodeParser: NodeParser,
  ) {}

  public supportsNode(node: ts.InferTypeNode): boolean {
    return node.kind === ts.SyntaxKind.InferType
  }

  public createType(node: ts.InferTypeNode, _context: Context): BaseType {
    return new InferType(node.typeParameter.name.escapedText.toString())
  }
}
