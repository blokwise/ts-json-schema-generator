import { assertValidSchema } from '../../utils'

it(
  'valid-data - annotation-custom',
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
