import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-intersection-union-primitive',
  assertValidSchema('type-intersection-union-primitive', 'MyType'),
)
