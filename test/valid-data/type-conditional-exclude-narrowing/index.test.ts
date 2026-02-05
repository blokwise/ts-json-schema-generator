import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-conditional-exclude-narrowing',
  assertValidSchema('type-conditional-exclude-narrowing', 'MyObject'),
)
