import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - any-unknown', assertValidSchema('any-unknown', 'MyObject'))
