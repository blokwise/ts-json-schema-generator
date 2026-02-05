import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-additional-props',
  assertValidSchema('type-intersection-additional-props', 'MyObject'),
)
