import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - function-parameters-default-value',
  // @ts-expect-error this is ok
  assertValidSchema('function-parameters-default-value', 'myFunction'),
)
