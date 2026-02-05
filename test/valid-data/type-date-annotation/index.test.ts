import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-date-annotation', assertValidSchema('type-date-annotation', 'MyObject', { jsDoc: 'basic' }))
