import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - unique-symbol', assertValidSchema('unique-symbol', 'MyObject'))
