import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-indexed-access-tuple-2', assertValidSchema('type-indexed-access-tuple-2', 'MyType'))
