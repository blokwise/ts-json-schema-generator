import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-intersection', assertValidSchema('type-intersection', 'MyObject'))
