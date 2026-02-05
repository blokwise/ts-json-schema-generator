import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-enum-optional', assertValidSchema('type-mapped-enum-optional', 'MyObject'))
