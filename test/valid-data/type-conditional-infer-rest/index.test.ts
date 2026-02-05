import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-conditional-infer-rest', assertValidSchema('type-conditional-infer-rest', 'MyType'))
