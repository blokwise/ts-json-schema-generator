import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - export-star-prune-unreachable',
  // @ts-expect-error this is ok
  assertValidSchema('export-star-prune-unreachable', '*', undefined, { mainTsOnly: true }),
)
