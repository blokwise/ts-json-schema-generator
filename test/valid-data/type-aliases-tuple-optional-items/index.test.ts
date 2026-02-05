import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-aliases-tuple-optional-items',
  assertValidSchema('type-aliases-tuple-optional-items', 'MyTuple'),
)
