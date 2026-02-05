import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-partial-conflict',
  // @ts-expect-error this is ok
  assertValidSchema('type-intersection-partial-conflict', 'MyType'),
)
