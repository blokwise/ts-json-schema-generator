import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - function-parameters-variable-assignment',
  // @ts-expect-error this is ok
  assertValidSchema('function-parameters-variable-assignment', 'myFunction'),
)
