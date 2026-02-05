import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-partial-conflict-union',
  assertValidSchema('type-intersection-partial-conflict-union', 'MyType'),
)
