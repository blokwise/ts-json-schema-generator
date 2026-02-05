import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

// @ts-expect-error this is ok
it('valid-data - multiple-roots1 #1', assertValidSchema('multiple-roots1', undefined, undefined, undefined))

// @ts-expect-error this is ok
it('valid-data - multiple-roots1 #2', assertValidSchema('multiple-roots1', '*'))
