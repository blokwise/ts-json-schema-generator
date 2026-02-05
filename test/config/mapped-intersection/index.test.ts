import { it } from 'vitest'
import { assertConfigSchema } from '../../utils'

it(
  'config - mapped-intersection',
  assertConfigSchema('mapped-intersection', {
    type: 'MyObject',
    additionalProperties: true,
  }),
)
