interface NonExportedType {
  misc: number
}

export interface ExportedType {
  val: string
  val2: NonExportedType
}

export interface ExportedInterface {
  val: string
}

export interface Object1Prop {
  name: string
}

export interface Object2Prop {
  description: string
}

export interface MyObject1 {
  id: number
  bar: Object1Prop
}

export interface MyObject2 {
  idStr: string
  baz: Object2Prop
}
