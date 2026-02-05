import { assertValidSchema } from '../../utils'

it('valid-data - import-internal', assertValidSchema('import-internal', 'MyObject', { jsDoc: 'basic' }))
