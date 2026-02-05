import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-named-tuple-member', assertValidSchema('type-named-tuple-member', '*'))
