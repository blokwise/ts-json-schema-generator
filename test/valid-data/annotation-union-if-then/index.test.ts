import { assertValidSchema } from '../../utils'

it(
  'valid-data - annotation-union-if-then',
  assertValidSchema('annotation-union-if-then', 'Animal', { jsDoc: 'basic' }),
)
