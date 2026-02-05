import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-intersection-union-enum', assertValidSchema('type-intersection-union-enum', 'MyObject'))
