import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-union-intersection', assertValidSchema('type-mapped-union-intersection', 'MyObject'))
