import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - annotation-empty #1',
  // @ts-expect-error this is ok
  assertValidSchema('annotation-empty', 'MyObject', { jsDoc: 'basic', extraTags: ['customEmptyAnnotation'] }),
)

it(
  'valid-data - annotation-empty #2',
  // @ts-expect-error this is ok
  assertValidSchema('annotation-empty', 'MyObject', { extraTags: ['customEmptyAnnotation'] }),
)
