import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-aliases-tuple-empty', assertValidSchema('type-aliases-tuple-empty', 'MyTuple'))
