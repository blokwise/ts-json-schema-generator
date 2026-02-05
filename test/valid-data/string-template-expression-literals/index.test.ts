import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - string-template-expression-literals',
  // @ts-expect-error this is ok
  assertValidSchema('string-template-expression-literals', 'MyObject'),
)
