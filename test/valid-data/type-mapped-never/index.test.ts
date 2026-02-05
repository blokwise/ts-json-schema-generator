import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-never', assertValidSchema('type-mapped-never', 'MyObject'))
