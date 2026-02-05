import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - annotation-writeOnly', assertValidSchema('annotation-writeOnly', 'MyObject', { jsDoc: 'basic' }))
