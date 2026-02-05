import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - array-rest-only', assertValidSchema('array-rest-only', 'MyType'))
