import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-aliases-object', assertValidSchema('type-aliases-object', 'MyAlias'))
