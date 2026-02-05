import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-partial-conflict',
  assertValidSchema('type-intersection-partial-conflict', 'MyType'),
)
