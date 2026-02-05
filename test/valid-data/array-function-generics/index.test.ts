import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - array-function-generics', assertValidSchema('array-function-generics', '*'))
