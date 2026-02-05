import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-aliases-tuple-only-rest', assertValidSchema('type-aliases-tuple-only-rest', 'MyTuple'))
