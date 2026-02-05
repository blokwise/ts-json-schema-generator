import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-typeof-class-static-property',
  // @ts-expect-error this is ok
  assertValidSchema('type-typeof-class-static-property', 'MyType'),
)
