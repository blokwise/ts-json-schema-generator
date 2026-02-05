import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'discriminator-recursive',
  // @ts-expect-error this is ok
  assertValidSchema('discriminator-recursive', '*', { jsDoc: 'basic', discriminatorType: 'open-api' }),
)
