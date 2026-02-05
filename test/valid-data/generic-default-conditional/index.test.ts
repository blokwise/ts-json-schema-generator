import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - generic-default-conditional', assertValidSchema('generic-default-conditional', 'MyObject'))
