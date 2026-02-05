import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - enums-string', assertValidSchema('enums-string', 'Enum'))
