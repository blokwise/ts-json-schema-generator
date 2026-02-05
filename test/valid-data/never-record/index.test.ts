import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - never-record', assertValidSchema('never-record', 'Mapped'))
