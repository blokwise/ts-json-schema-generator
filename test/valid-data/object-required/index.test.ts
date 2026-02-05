import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - object-required',
  // @ts-expect-error this is ok
  assertValidSchema('object-required', 'MyObject', undefined, {
    invalidSamples: [
      { keys: ['a', 'b'], definitions: { a: 1, b: 2 } },
      { id: '123', keys: ['a', 'b'], definitions: { a: 1 } },
    ],
    validSamples: [
      { id: '123', keys: ['a', 'b'], definitions: { a: 1, b: 2 } },
      { id: '123', keys: [], definitions: {} },
    ],
    ajvOptions: { $data: true },
  }),
)
