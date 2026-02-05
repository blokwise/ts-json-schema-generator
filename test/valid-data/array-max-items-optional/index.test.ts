import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - array-max-items-optional', assertValidSchema('array-max-items-optional', 'MyType'))
