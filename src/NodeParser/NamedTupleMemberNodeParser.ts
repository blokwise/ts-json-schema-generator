import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import type { ReferenceType } from '../Type/ReferenceType'
import ts from 'typescript'
import { AnnotatedType } from '../Type/AnnotatedType'
import { ArrayType } from '../Type/ArrayType'
import { RestType } from '../Type/RestType'

export class NamedTupleMemberNodeParser implements SubNodeParser {
  public constructor(protected childNodeParser: NodeParser) {}

  public supportsNode(node: ts.TypeNode): boolean {
    return node.kind === ts.SyntaxKind.NamedTupleMember
  }

  public createType(node: ts.NamedTupleMember, context: Context, reference?: ReferenceType): BaseType {
    const baseType = this.childNodeParser.createType(node.type, context, reference)

    if (baseType instanceof ArrayType && node.getChildAt(0).kind === ts.SyntaxKind.DotDotDotToken) {
      return new RestType(baseType, node.name.text)
    }

    return baseType && new AnnotatedType(baseType, { title: node.name.text }, false)
  }
}
