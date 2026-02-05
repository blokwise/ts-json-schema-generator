import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-intersection-union #1', assertValidSchema('type-intersection-union', 'MyObject'))

// @ts-expect-error this is ok
it('valid-data - type-intersection-union #2', assertValidSchema('type-intersection-union', 'MyObject'))
