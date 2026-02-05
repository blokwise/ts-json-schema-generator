import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - string-literals-intrinsic', assertValidSchema('string-literals-intrinsic', 'MyObject'))
