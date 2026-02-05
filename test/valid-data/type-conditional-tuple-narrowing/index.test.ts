import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-conditional-tuple-narrowing',
  assertValidSchema('type-conditional-tuple-narrowing', 'MyObject'),
)
