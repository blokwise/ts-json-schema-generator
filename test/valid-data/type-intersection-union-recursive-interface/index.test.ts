import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-union-recursive-interface',
  // @ts-expect-error this is ok
  assertValidSchema('type-intersection-union-recursive-interface', 'Intersection'),
)
