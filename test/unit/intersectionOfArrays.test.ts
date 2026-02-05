import assert from 'node:assert'
import { describe, it } from 'vitest'
import { intersectionOfArrays } from '../../src/Utils/intersectionOfArrays'

describe('intersectionOfArrays', () => {
  it('returns members of a in b', () => {
    assert.deepStrictEqual(intersectionOfArrays([1, 2, 3, 4], [1, 2]), [1, 2])
    assert.deepStrictEqual(intersectionOfArrays([{ foo: 'bar' }], [{ foo: 'bar' }]), [{ foo: 'bar' }])
    assert.deepStrictEqual(intersectionOfArrays([1, 2, 3, 4], [5, 2, 1, 9]), [2, 1])
    assert.deepStrictEqual(intersectionOfArrays([1, '2', 3, '4'], ['5', 2, 1, 9]), [1])
  })
})
