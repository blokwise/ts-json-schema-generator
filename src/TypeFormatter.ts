import type { Definition } from './Schema/Definition'
import type { BaseType } from './Type/BaseType'

export interface TypeFormatter {
  getDefinition: (type: BaseType) => Definition
  getChildren: (type: BaseType) => BaseType[]
}
