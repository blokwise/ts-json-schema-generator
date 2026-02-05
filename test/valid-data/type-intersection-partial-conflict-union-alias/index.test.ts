import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-partial-conflict-union-alias',
  assertValidSchema('type-intersection-partial-conflict-union-alias', 'MyType'),
)
