import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-indexed-access-tuple-union',
  // @ts-expect-error this is ok
  assertValidSchema('type-indexed-access-tuple-union', 'FormLayout'),
)
