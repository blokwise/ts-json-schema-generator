import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - binary-expression', assertValidSchema('binary-expression', 'MyObject'))
