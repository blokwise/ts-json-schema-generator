import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { NumberType } from '../Type/NumberType'

export class NumberTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof NumberType
  }

  public getDefinition(_type: NumberType): Definition {
    return { type: 'number' }
  }

  public getChildren(_type: NumberType): BaseType[] {
    return []
  }
}
