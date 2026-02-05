import type { Context } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { ObjectType } from '../Type/ObjectType'
import { getKey } from '../Utils/nodeKey'

export class ObjectTypeNodeParser implements SubNodeParser {
  public supportsNode(node: ts.KeywordTypeNode): boolean {
    return node.kind === ts.SyntaxKind.ObjectKeyword
  }

  public createType(node: ts.KeywordTypeNode, context: Context): BaseType {
    return new ObjectType(`object-${getKey(node, context)}`, [], [], true, true)
  }
}
