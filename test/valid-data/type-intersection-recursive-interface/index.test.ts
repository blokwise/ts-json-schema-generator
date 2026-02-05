import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-recursive-interface',
  // @ts-expect-error this is ok
  assertValidSchema('type-intersection-recursive-interface', 'Intersection'),
)
