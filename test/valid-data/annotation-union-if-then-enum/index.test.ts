import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - annotation-union-if-then-enum',
  // @ts-expect-error this is ok
  assertValidSchema('annotation-union-if-then-enum', 'AB', { jsDoc: 'basic' }),
)
