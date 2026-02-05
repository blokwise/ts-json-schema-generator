import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - interface-computed-property-name',
  // @ts-expect-error this is ok
  assertValidSchema('interface-computed-property-name', 'MyObject'),
)
