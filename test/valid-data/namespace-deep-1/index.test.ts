import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - namespace-deep-1', assertValidSchema('namespace-deep-1', 'RootNamespace.Def'))
