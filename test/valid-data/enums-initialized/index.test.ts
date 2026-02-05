import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - enums-initialized', assertValidSchema('enums-initialized', 'Enum'))
