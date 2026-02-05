import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - annotation-readOnly', assertValidSchema('annotation-readOnly', 'MyObject', { jsDoc: 'basic' }))
