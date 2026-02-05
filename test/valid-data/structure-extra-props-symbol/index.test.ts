import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - structure-extra-props-symbol', assertValidSchema('structure-extra-props-symbol', 'MyObject'))
