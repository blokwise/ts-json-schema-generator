import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-extends-never', assertValidSchema('type-extends-never', 'MyType'))
