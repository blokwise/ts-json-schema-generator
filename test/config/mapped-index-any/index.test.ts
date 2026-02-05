import { it } from 'vitest'
import { assertConfigSchema } from '../../utils'

it(
  'config - mapped-index-any',
  assertConfigSchema('mapped-index-any', {
    type: '*',
    additionalProperties: true,
  }),
)
