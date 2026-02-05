import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('generic-indexed-access-constraint', assertValidSchema('generic-indexed-access-constraint', 'MyObject'))
