import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-conditional-exclude-narrowing',
  // @ts-expect-error this is ok
  assertValidSchema('type-conditional-exclude-narrowing', 'MyObject'),
)
