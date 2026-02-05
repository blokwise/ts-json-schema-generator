import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import type { TypeFormatter } from '../TypeFormatter'
import { ArrayType } from '../Type/ArrayType'

export class ArrayTypeFormatter implements SubTypeFormatter {
  public constructor(private childTypeFormatter: TypeFormatter) {}

  public supportsType(type: BaseType): boolean {
    return type instanceof ArrayType
  }

  public getDefinition(type: ArrayType): Definition {
    return {
      type: 'array',
      items: this.childTypeFormatter.getDefinition(type.getItem()),
    }
  }

  public getChildren(type: ArrayType): BaseType[] {
    return this.childTypeFormatter.getChildren(type.getItem())
  }
}
