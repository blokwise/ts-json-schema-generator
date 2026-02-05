import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-conditional-exclude-complex',
  // @ts-expect-error this is ok
  assertValidSchema('type-conditional-exclude-complex', 'BaseAxisNoSignals'),
)
