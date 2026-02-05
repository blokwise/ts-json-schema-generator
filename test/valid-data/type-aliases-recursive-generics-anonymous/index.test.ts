import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-aliases-recursive-generics-anonymous',
  // @ts-expect-error this is ok
  assertValidSchema('type-aliases-recursive-generics-anonymous', 'MyAlias'),
)
