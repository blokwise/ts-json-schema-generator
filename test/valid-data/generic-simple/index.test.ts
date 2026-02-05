import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - generic-simple #1', assertValidSchema('generic-simple', 'MyObject'))

// @ts-expect-error this is ok
it('valid-data - generic-simple #2', assertValidSchema('generic-simple', '*', { expose: 'all' }))
