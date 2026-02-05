import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-double-exclude', assertValidSchema('type-mapped-double-exclude', 'MyObject'))
