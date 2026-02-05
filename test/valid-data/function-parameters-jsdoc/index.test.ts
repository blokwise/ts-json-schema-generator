import { assertValidSchema } from '../../utils'

it(
  'valid-data - function-parameters-jsdoc',
  assertValidSchema('function-parameters-jsdoc', 'myFunction', { jsDoc: 'basic' }),
)
