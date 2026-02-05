import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - array-min-items-2', assertValidSchema('array-min-items-2', 'MyType'))
