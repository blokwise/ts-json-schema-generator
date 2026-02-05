import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-conditional-simple', assertValidSchema('type-conditional-simple', 'MyObject'))
