import { assertValidSchema } from '../../utils'

it('valid-data - annotation-readOnly', assertValidSchema('annotation-readOnly', 'MyObject', { jsDoc: 'basic' }))
