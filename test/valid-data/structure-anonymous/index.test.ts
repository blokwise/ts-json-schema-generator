import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - structure-anonymous', assertValidSchema('structure-anonymous', 'MyObject'))
