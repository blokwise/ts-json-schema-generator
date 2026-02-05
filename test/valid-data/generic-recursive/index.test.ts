import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - generic-recursive', assertValidSchema('generic-recursive', 'MyObject'))
