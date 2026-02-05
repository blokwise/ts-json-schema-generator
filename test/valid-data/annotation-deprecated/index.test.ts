import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - annotation-deprecated #1',
  // @ts-expect-error this is ok
  assertValidSchema('annotation-deprecated', 'MyObject', { jsDoc: 'basic', extraTags: ['deprecationMessage'] }),
)

it(
  'valid-data - annotation-deprecated #2',
  // @ts-expect-error this is ok
  assertValidSchema('annotation-deprecated', 'MyObject', { extraTags: ['deprecationMessage'] }),
)
