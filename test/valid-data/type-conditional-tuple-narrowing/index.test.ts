import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-conditional-tuple-narrowing',
  // @ts-expect-error this is ok
  assertValidSchema('type-conditional-tuple-narrowing', 'MyObject'),
)
