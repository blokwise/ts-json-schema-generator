import { assertValidSchema } from '../../utils'

it('valid-data - export-star', assertValidSchema('export-star', '*', undefined, { mainTsOnly: true }))
