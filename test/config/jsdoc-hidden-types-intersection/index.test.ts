import { it } from 'vitest'
import { assertConfigSchema } from '../../utils'

it(
  'config - jsdoc-hidden-types-intersection',
  assertConfigSchema('jsdoc-hidden-types-intersection', {
    type: 'MyType',
    expose: 'export',
    topRef: true,
    jsDoc: 'extended',
  }),
)
