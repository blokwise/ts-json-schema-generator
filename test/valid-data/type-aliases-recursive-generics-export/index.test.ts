import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-aliases-recursive-generics-export',
  // @ts-expect-error this is ok
  assertValidSchema('type-aliases-recursive-generics-export', 'MyAlias'),
)
