import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - literal-object-type', assertValidSchema('literal-object-type', 'MyType'))
