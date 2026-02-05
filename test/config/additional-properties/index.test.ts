import { it } from 'vitest'
import { assertConfigSchema } from '../../utils'

it(
  'config - additional-properties',
  assertConfigSchema('additional-properties', {
    type: 'MyObject',
    additionalProperties: true,
  }),
)
