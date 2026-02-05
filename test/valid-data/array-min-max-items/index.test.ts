import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - array-min-max-items', assertValidSchema('array-min-max-items', 'MyType'))
