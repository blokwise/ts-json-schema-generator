import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-union-recursive-interface',
  assertValidSchema('type-intersection-union-recursive-interface', 'Intersection'),
)
