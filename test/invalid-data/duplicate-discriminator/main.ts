export interface A {
  type: 'A'
  a: string
}

export interface B {
  type: 'A'
  b: string
}

/**
 * @discriminator type
 */
export type MyType = A | B
