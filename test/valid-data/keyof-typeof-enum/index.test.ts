import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - keyof-typeof-enum', assertValidSchema('keyof-typeof-enum', 'MyObject'))
