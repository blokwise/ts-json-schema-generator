import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-conditional-infer-tail-recursion',
  assertValidSchema('type-conditional-infer-tail-recursion', 'MyType'),
)
