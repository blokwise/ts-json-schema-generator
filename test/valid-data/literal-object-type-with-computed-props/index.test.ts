import { assertValidSchema } from '../../utils'

it(
  'valid-data - literal-object-type-with-computed-props',
  assertValidSchema('literal-object-type-with-computed-props', 'MyType'),
)
