interface A { kind: 'a' | 'A', a: string }
interface B { kind: 'b' | 'B', b: string }

/**
 * @discriminator kind
 */
export type AB = A | B
