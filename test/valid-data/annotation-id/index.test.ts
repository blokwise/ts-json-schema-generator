import { assertValidSchema } from '../../utils'

it('valid-data - annotation-id', assertValidSchema('annotation-id', 'MyObject', { schemaId: 'Test' }))
