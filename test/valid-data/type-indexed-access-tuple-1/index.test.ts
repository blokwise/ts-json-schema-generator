import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-indexed-access-tuple-1', assertValidSchema('type-indexed-access-tuple-1', 'MyType'))
