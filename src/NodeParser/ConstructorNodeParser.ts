import type { FunctionOptions } from '../Config'
import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { ConstructorType } from '../Type/ConstructorType'
import { DefinitionType } from '../Type/DefinitionType'
import { NeverType } from '../Type/NeverType'
import { getNamedArguments, getTypeName } from './FunctionNodeParser'

export class ConstructorNodeParser implements SubNodeParser {
  constructor(
    protected childNodeParser: NodeParser,
    protected functions: FunctionOptions,
  ) {}

  public supportsNode(node: ts.TypeNode): boolean {
    return node.kind === ts.SyntaxKind.ConstructorType
  }

  public createType(node: ts.ConstructorTypeNode, context: Context): BaseType {
    if (this.functions === 'hide') {
      return new NeverType()
    }

    const name = getTypeName(node)
    const func = new ConstructorType(node, getNamedArguments(this.childNodeParser, node, context))

    return name ? new DefinitionType(name, func) : func
  }
}
