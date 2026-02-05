import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-keyof-object-function', assertValidSchema('type-keyof-object-function', 'MyType'))
