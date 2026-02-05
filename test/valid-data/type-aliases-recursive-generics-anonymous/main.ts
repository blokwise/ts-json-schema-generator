interface Map<T> { [key: string]: T }

export interface MyAlias {
  a: Map<MyAlias>
}
