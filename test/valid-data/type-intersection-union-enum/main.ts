type type1 = 'foo' | 'bar'
type type2 = type1 | 'moo'

export interface MyObject {
  field1: type1
  field2: type2
}
