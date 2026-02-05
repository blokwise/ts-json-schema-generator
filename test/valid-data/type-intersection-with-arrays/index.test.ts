import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-intersection-with-arrays', assertValidSchema('type-intersection-with-arrays', '*'))
