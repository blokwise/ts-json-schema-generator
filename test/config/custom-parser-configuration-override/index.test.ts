/* eslint-disable unused-imports/no-unused-vars */

import type { BaseType, Context, ReferenceType, SubNodeParser } from '../../../src'
import ts from 'typescript'
import { it } from 'vitest'
import { StringType } from '../../../src/Type/StringType'
import { assertConfigSchema } from '../../utils'

class ExampleNullParser implements SubNodeParser {
  supportsNode(node: ts.Node): boolean {
    return node.kind === ts.SyntaxKind.NullKeyword
  }

  createType(node: ts.Node, context: Context, reference?: ReferenceType): BaseType {
    return new StringType()
  }
}

it(
  'config - custom-parser-configuration-override',
  // @ts-expect-error this is ok
  assertConfigSchema(
    'custom-parser-configuration-override',
    {
      type: 'MyObject',
    },
    false,
    undefined,
    parser => parser.addNodeParser(new ExampleNullParser()),
  ),
)
