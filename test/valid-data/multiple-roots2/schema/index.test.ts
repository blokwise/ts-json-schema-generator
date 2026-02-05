import { it } from 'vitest'
import { assertValidSchema } from '../../../utils'

it(
  'valid-data - multiple-roots2/schema',
  // @ts-expect-error this is ok
  assertValidSchema('multiple-roots2/schema', undefined, undefined, undefined),
)
