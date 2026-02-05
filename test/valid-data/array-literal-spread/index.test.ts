import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - array-literal-spread', assertValidSchema('array-literal-spread', 'MyType'))
