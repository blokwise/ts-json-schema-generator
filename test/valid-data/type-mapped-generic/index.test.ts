import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-generic', assertValidSchema('type-mapped-generic', 'MyObject'))
