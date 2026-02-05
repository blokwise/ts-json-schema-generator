import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-mapped-native-single-literal',
  assertValidSchema('type-mapped-native-single-literal', 'MyObject'),
)
