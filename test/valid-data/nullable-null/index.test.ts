import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - nullable-null', assertValidSchema('nullable-null', 'MyObject'))
