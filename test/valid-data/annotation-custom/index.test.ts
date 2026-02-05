import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - annotation-custom',
  // @ts-expect-error this is ok
  assertValidSchema('annotation-custom', 'MyObject', {
    jsDoc: 'basic',
    extraTags: [
      'customBooleanProperty',
      'customNumberProperty',
      'customStringProperty',
      'customComplexProperty',
      'customMultilineProperty',
      'customUnquotedProperty',
    ],
  }),
)
