import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - shorthand-array', assertValidSchema('shorthand-array', 'MyType'))
