import { it } from 'vitest'
import { assertConfigSchema } from '../../utils'

it(
  'config - full-description',
  assertConfigSchema('full-description', {
    type: 'MyObject',
    expose: 'export',
    topRef: false,
    jsDoc: 'extended',
    sortProps: true,
    markdownDescription: true,
    fullDescription: true,
  }),
)
