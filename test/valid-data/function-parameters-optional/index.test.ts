import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - function-parameters-optional', assertValidSchema('function-parameters-optional', 'myFunction'))
