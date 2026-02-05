import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-mapped-pick-union-alias',
  assertValidSchema('type-mapped-pick-union-alias', 'PickAliasedLiteralUnion'),
)
