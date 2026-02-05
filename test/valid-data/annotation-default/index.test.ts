import { it } from 'vitest'
import { assertValidSchema } from '../../utils'

it(
  'valid-data - annotation-default @1',
  // @ts-expect-error this is ok
  assertValidSchema('annotation-default', 'MyObject', undefined, {
    validSamples: [
      {
        nullField: null,
        numberField: 100,
        stringField: 'goodbye',
        arrayField: [],
        booleanField: false,
        nestedField: {},
      },
    ],
    invalidSamples: [{ nullField: null, numberField: 10, stringField: 'hello' }, {}],
  }),
)

it(
  'valid-data - annotation-default #2',
  // @ts-expect-error this is ok
  assertValidSchema('annotation-default', 'MyObject', undefined, {
    validSamples: [{ nullField: null, numberField: 10, stringField: 'hello' }, {}],
    ajvOptions: { useDefaults: true },
  }),
)
