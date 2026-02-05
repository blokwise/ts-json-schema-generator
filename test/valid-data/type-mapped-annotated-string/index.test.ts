import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - type-mapped-annotated-string', assertValidSchema('type-mapped-annotated-string', '*'))
