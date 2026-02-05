import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-indexed-access-object-1', assertValidSchema('type-indexed-access-object-1', 'MyType'))
