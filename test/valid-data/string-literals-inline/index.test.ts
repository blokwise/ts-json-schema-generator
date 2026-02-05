import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - string-literals-inline', assertValidSchema('string-literals-inline', 'MyObject'))
