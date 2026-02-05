import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-aliases-primitive-with-id',
  // @ts-expect-error this is ok
  assertValidSchema('type-aliases-primitive-with-id', 'MyString', { jsDoc: 'none', schemaId: 'testId' }),
)
