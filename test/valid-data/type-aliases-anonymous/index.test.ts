import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-aliases-anonymous', assertValidSchema('type-aliases-anonymous', 'MyObject'))
