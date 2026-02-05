import { assertValidSchema } from '../../utils'

it(
  'valid-data - export-star-prune-unreachable',
  assertValidSchema('export-star-prune-unreachable', '*', undefined, { mainTsOnly: true }),
)
