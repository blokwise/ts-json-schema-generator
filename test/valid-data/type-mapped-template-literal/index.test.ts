import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-template-literal', assertValidSchema('type-mapped-template-literal', 'MyObject'))
