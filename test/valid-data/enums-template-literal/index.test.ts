import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - enums-template-literal', assertValidSchema('enums-template-literal', 'MyObject'))
