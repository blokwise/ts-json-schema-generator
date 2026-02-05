type TypeName<T> = T extends string ? 'string' : T extends number ? 'number' : 'unknown'

export interface MyObject {
  string: TypeName<string>
  number?: TypeName<number>
  stringOrNumber: TypeName<string | number>
  unknown?: TypeName<boolean>
  stringOrUnknown?: TypeName<string | boolean>
  numberOrUnknown?: TypeName<number | boolean>
}
