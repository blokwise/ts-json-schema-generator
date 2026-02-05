import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-recursive-deep-exclude', assertValidSchema('type-recursive-deep-exclude', 'MyType'))
