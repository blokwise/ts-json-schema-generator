import { assertValidSchema } from '../../utils'

it(
  'valid-data - discriminator',
  assertValidSchema('discriminator', 'Animal', { jsDoc: 'basic', discriminatorType: 'open-api' }),
)
