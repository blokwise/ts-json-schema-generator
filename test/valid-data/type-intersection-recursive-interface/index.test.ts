import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-recursive-interface',
  assertValidSchema('type-intersection-recursive-interface', 'Intersection'),
)
