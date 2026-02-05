import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - namespace-deep-3', assertValidSchema('namespace-deep-3', 'RootNamespace.SubNamespace.HelperB'))
