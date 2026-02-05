import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { HiddenType } from '../Type/HiddenType'

export class HiddenTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof HiddenType
  }

  public getDefinition(_type: HiddenType): Definition {
    return { additionalProperties: false }
  }

  public getChildren(_type: HiddenType): BaseType[] {
    return []
  }
}
