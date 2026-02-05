import { it } from 'vitest'
import { assertConfigSchema } from '../../utils'

it(
  'config - jsdoc-hidden',
  assertConfigSchema('jsdoc-hidden', {
    type: 'MyObject',
    expose: 'export',
    topRef: true,
    jsDoc: 'extended',
  }),
)
