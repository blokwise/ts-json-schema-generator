import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - object-function-expression', assertValidSchema('object-function-expression', 'MyType'))
