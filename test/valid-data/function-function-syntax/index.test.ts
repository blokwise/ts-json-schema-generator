import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - function-function-syntax', assertValidSchema('function-function-syntax', 'myFunction'))
