import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-aliases-local-namespace', assertValidSchema('type-aliases-local-namespace', 'MyObject'))
