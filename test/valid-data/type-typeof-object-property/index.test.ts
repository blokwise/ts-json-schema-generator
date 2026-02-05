import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-typeof-object-property', assertValidSchema('type-typeof-object-property', 'MyType'))
