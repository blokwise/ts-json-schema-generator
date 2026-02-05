import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - literal-index-type', assertValidSchema('literal-index-type', 'MyType'))
