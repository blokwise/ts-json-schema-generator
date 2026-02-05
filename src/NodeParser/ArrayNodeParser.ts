import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { AnyType } from '../Type/AnyType'
import { ArrayType } from '../Type/ArrayType'

export class ArrayNodeParser implements SubNodeParser {
  public constructor(protected childNodeParser: NodeParser) {}

  public supportsNode(node: ts.ArrayTypeNode): boolean {
    return node.kind === ts.SyntaxKind.ArrayType
  }

  public createType(node: ts.ArrayTypeNode, context: Context): BaseType {
    const type = this.childNodeParser.createType(node.elementType, context)
    // Generics without `extends` or `defaults` cannot be resolved, so we fallback to `any`
    return new ArrayType(type ?? new AnyType())
  }
}
