import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-indexed-access-keyof', assertValidSchema('type-indexed-access-keyof', 'MyType'))
