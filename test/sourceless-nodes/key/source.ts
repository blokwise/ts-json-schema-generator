import type { B } from './types1'
import { Value } from './const'

export async function withSemiInferredReturnType() {
  return {
    a: {
      b: Value.c.d,
      c: Value.c.e,
    },
    d: Value.c.i[0]!.j,
    e: Value.c.f,
    f: Value.b as B[],
  }
}
