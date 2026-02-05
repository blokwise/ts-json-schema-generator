import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-conditional-narrowing', assertValidSchema('type-conditional-narrowing', 'MyObject'))
