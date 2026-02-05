import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - annotation-comment', assertValidSchema('annotation-comment', 'MyObject'))
