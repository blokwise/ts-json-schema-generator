import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-empty-exclude', assertValidSchema('type-mapped-empty-exclude', 'MyObject'))
