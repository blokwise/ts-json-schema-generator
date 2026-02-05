import { it } from 'vitest'
import { assertConfigSchema } from '../../utils'

it(
  'config - expose-none-topref-true',
  assertConfigSchema('expose-none-topref-true', {
    type: 'MyObject',
    expose: 'none',
    topRef: true,
    jsDoc: 'none',
  }),
)
