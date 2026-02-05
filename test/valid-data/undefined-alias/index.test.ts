import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - undefined-alias', assertValidSchema('undefined-alias', 'MyType'))
