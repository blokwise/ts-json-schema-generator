import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - object-literal-expression', assertValidSchema('object-literal-expression', 'MyType'))
