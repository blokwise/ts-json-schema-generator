import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - interface-extended-extra-props', assertValidSchema('interface-extended-extra-props', 'MyObject'))
