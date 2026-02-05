import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - literal-object-type-with-computed-props',
  // @ts-expect-error this is ok
  assertValidSchema('literal-object-type-with-computed-props', 'MyType'),
)
