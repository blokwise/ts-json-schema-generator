import assert from 'node:assert'
import { describe, it } from 'vitest'
import { strip } from '../../src/Utils/String'

describe('strip', () => {
  it('removes quotes', () => {
    assert.strictEqual(strip('\'quote\''), 'quote')
    assert.strictEqual(strip('"quote"'), 'quote')
  })

  it('ignores individual quotes', () => {
    assert.strictEqual(strip('quote\''), 'quote\'')
    assert.strictEqual(strip('"quote'), '"quote')
  })

  it('returns original', () => {
    assert.strictEqual(strip('original'), 'original')
  })
})
