import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-conditional-infer-tail-recursion',
  // @ts-expect-error this is ok
  assertValidSchema('type-conditional-infer-tail-recursion', 'MyType'),
)
