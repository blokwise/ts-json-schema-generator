import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - interface-property-dash', assertValidSchema('interface-property-dash', 'MyObject'))
