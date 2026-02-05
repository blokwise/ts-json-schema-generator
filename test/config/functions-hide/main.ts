type MyConstructor = new () => any

export interface MyType {
  foo?: (b: string) => number
  bar?: number
  baz?: MyConstructor
}
