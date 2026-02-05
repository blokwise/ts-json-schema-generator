import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-mapped-pick-union-alias',
  // @ts-expect-error this is ok
  assertValidSchema('type-mapped-pick-union-alias', 'PickAliasedLiteralUnion'),
)
