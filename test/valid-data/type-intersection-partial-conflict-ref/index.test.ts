import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-partial-conflict-ref',
  assertValidSchema('type-intersection-partial-conflict-ref', 'MyType'),
)
