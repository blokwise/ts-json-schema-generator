import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-union-primitive',
  // @ts-expect-error this is ok
  assertValidSchema('type-intersection-union-primitive', 'MyType'),
)
