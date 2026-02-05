import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-simple', assertValidSchema('type-mapped-simple', 'MyObject'))
