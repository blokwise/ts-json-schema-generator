import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - function-parameters-jsdoc',
  // @ts-expect-error this is ok
  assertValidSchema('function-parameters-jsdoc', 'myFunction', { jsDoc: 'basic' }),
)
