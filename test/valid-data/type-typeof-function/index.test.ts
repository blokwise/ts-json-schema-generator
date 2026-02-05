import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-typeof-function', assertValidSchema('type-typeof-function', '*'))
