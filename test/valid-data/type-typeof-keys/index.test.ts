import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-typeof-keys', assertValidSchema('type-typeof-keys', 'MyType'))
