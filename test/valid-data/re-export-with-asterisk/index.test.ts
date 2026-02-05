import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - re-export-with-asterisk',
  // @ts-expect-error this is ok
  assertValidSchema('re-export-with-asterisk', '*', undefined, { mainTsOnly: true }),
)
