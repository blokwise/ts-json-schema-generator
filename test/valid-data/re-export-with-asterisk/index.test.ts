import { assertValidSchema } from '../../utils'

it(
  'valid-data - re-export-with-asterisk',
  assertValidSchema('re-export-with-asterisk', '*', undefined, { mainTsOnly: true }),
)
