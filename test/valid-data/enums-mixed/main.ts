/* eslint-disable ts/prefer-literal-enum-member */

export enum Enum {
  A, // = 0
  B = 1,
  C = true as any,
  D = 'str' as any,
  E = null,
}
