import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - annotation-union-if-then',
  // @ts-expect-error this is ok
  assertValidSchema('annotation-union-if-then', 'Animal', { jsDoc: 'basic' }),
)
