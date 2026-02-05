import { it } from 'vitest'
import { assertConfigSchema } from '../../utils'

it(
  'config - expose-all-topref-false',
  assertConfigSchema('expose-all-topref-false', {
    type: 'MyObject',
    expose: 'all',
    topRef: false,
    jsDoc: 'none',
  }),
)
