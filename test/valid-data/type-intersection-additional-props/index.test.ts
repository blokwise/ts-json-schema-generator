import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-additional-props',
  // @ts-expect-error this is ok
  assertValidSchema('type-intersection-additional-props', 'MyObject'),
)
