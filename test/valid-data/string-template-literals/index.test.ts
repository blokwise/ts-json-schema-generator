import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - string-template-literals', assertValidSchema('string-template-literals', 'MyObject'))
