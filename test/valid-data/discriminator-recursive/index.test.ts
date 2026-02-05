import { assertValidSchema } from '../../utils'

it(
  'discriminator-recursive',
  assertValidSchema('discriminator-recursive', '*', { jsDoc: 'basic', discriminatorType: 'open-api' }),
)
