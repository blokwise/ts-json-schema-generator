import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - function-parameters-declaration',
  // @ts-expect-error this is ok
  assertValidSchema('function-parameters-declaration', 'myFunction'),
)
