import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-partial-conflict-union-alias',
  // @ts-expect-error this is ok
  assertValidSchema('type-intersection-partial-conflict-union-alias', 'MyType'),
)
