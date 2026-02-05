import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-aliases-tuple-optional-items',
  // @ts-expect-error this is ok
  assertValidSchema('type-aliases-tuple-optional-items', 'MyTuple'),
)
