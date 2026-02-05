export type MyObject = ConditionalGeneric

export interface ConditionalGeneric<T = string extends 'foo' ? 'bar' : 'baz'> {
  foo: T
}
