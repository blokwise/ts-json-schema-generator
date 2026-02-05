import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-mapped-index-as-with-conditional',
  // @ts-expect-error this is ok
  assertValidSchema('type-mapped-index-as-with-conditional', 'MyObject'),
)
