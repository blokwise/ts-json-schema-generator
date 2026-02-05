import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-enum-number', assertValidSchema('type-mapped-enum-number', 'MyObject'))
