import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - undefined-union', assertValidSchema('undefined-union', 'MyType'))
