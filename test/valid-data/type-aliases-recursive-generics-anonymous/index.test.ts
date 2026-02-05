import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-aliases-recursive-generics-anonymous',
  assertValidSchema('type-aliases-recursive-generics-anonymous', 'MyAlias'),
)
