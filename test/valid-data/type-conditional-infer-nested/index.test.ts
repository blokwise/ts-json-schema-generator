import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-conditional-infer-nested', assertValidSchema('type-conditional-infer-nested', 'MyType'))
