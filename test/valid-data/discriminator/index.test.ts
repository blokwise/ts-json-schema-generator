import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - discriminator',
  // @ts-expect-error this is ok
  assertValidSchema('discriminator', 'Animal', { jsDoc: 'basic', discriminatorType: 'open-api' }),
)
