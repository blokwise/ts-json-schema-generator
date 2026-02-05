import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - exported-enums-union', assertValidSchema('exported-enums-union', 'MyObject'))
