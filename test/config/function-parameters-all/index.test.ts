import { it } from 'vitest'
import { assertConfigSchema } from '../../utils'

it(
  'config - function-parameters-all',
  assertConfigSchema('function-parameters-all', {
    type: '*',
  }),
)
