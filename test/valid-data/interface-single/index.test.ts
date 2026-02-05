import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - interface-single', assertValidSchema('interface-single', 'MyObject'))
