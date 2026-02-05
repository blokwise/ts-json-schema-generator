import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - generic-prefixed-number', assertValidSchema('generic-prefixed-number', 'MyObject'))
