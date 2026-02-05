import { it } from 'vitest'
import { assertConfigSchema } from '../../utils'

it(
  'config - jsdoc-inheritance',
  assertConfigSchema('jsdoc-inheritance', {
    type: 'MyObject',
    expose: 'export',
    topRef: true,
    jsDoc: 'extended',
  }),
)
