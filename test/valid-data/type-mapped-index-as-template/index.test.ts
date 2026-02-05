import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-index-as-template', assertValidSchema('type-mapped-index-as-template', 'MyObject'))
