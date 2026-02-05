import assert from 'node:assert'
import { describe, it } from 'vitest'
import { HiddenType } from '../../../src/Type/HiddenType'
import { NeverType } from '../../../src/Type/NeverType'

describe('hiddenType', () => {
  it('creates a HiddenType', () => {
    const hidden = new HiddenType()
    assert.strictEqual(hidden instanceof NeverType, true)
    assert.strictEqual(hidden.getId(), 'hidden')
  })
})
