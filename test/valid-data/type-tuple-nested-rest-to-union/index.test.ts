import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-tuple-nested-rest-to-union', assertValidSchema('type-tuple-nested-rest-to-union', 'MyType'))
