import { assertValidSchema } from '../../utils'

it(
  'valid-data - annotation-description-override',
  assertValidSchema('annotation-description-override', 'MyObject', { extraTags: ['markdownDescription'] }),
)
