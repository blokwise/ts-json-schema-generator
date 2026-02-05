import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - annotation-description-override',
  // @ts-expect-error this is ok
  assertValidSchema('annotation-description-override', 'MyObject', { extraTags: ['markdownDescription'] }),
)
