import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - export-star', assertValidSchema('export-star', '*', undefined, { mainTsOnly: true }))
