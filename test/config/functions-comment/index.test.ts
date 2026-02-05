import { it } from 'vitest'
import { assertConfigSchema } from '../../utils'

it(
  'config - functions-comment',
  assertConfigSchema('functions-comment', {
    type: 'MyType',
    functions: 'comment',
  }),
)
