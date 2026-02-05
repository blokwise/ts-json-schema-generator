import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-index-as', assertValidSchema('type-mapped-index-as', 'MyObject'))
