/* eslint-disable ts/no-namespace */

import type { A, B, C } from './types1'

// Uses global scope to test for types without direct import
declare global {
  namespace Test {
    type GlobalType = A | B[] | C
  }
}
