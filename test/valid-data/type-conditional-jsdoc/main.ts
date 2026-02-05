/**
 * Number or string
 * @pattern foo
 */
type NumberOrString = number | string

type NoString<T> = T extends string ? never : T

type BooleanOrNumberOrString = NumberOrString | boolean

/**
 * No string
 * @pattern bar
 */
type NoStringDocumented<T> = T extends string ? never : T

export interface MyObject {
  a: NumberOrString extends number ? never : NumberOrString

  /** Description of b */
  b: NumberOrString extends number ? never : NumberOrString

  c: NoString<NumberOrString>

  d: NoStringDocumented<NumberOrString>

  /** Description of e */
  e: NoString<NumberOrString>

  /** Description of f */
  f: NoStringDocumented<NumberOrString>

  g: Exclude<NumberOrString, boolean>

  h: Exclude<NumberOrString, number>

  i: Exclude<BooleanOrNumberOrString, boolean>
}
