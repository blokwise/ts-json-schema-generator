import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-intersection-conflict', assertValidSchema('type-intersection-conflict', 'MyObject'))
