import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - string-literals-hack', assertValidSchema('string-literals-hack', 'MyObject'))
