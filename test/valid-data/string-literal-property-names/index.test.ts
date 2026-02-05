import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - string-literal-property-names', assertValidSchema('string-literal-property-names', '*'))
