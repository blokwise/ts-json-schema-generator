import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-aliases-recursive-generics-export',
  assertValidSchema('type-aliases-recursive-generics-export', 'MyAlias'),
)
