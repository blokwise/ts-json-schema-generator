/* eslint-disable ts/prefer-literal-enum-member */

export enum Enum {
  X = 1 << 1,
  Y = 1 << 2,
  Z = X | Y,
  A = 1,
}
