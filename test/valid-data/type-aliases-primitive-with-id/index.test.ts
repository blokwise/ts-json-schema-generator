import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-aliases-primitive-with-id',
  assertValidSchema('type-aliases-primitive-with-id', 'MyString', { jsDoc: 'none', schemaId: 'testId' }),
)
