import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - namespace-deep-2', assertValidSchema('namespace-deep-2', 'RootNamespace.SubNamespace.HelperA'))
