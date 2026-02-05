import { assertValidSchema } from '../../utils'

it(
  'valid-data - annotation-union-if-then-enum',
  assertValidSchema('annotation-union-if-then-enum', 'AB', { jsDoc: 'basic' }),
)
