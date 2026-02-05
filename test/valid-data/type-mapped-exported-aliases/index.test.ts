import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-exported-aliases', assertValidSchema('type-mapped-exported-aliases', '*'))
