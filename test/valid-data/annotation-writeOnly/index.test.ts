import { assertValidSchema } from '../../utils'

it('valid-data - annotation-writeOnly', assertValidSchema('annotation-writeOnly', 'MyObject', { jsDoc: 'basic' }))
