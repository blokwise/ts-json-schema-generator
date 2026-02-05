import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - type-mapped-native-single-literal',
  // @ts-expect-error this is ok
  assertValidSchema('type-mapped-native-single-literal', 'MyObject'),
)
