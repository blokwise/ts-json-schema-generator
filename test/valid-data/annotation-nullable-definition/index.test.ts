import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - annotation-nullable-definition', assertValidSchema('annotation-nullable-definition', 'MyObject'))
