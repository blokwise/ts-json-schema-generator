import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-conditional-intersection', assertValidSchema('type-conditional-intersection', 'MyObject'))
