import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - import-internal', assertValidSchema('import-internal', 'MyObject', { jsDoc: 'basic' }))
