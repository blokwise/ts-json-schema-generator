import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { AnyType } from '../Type/AnyType'

export class AnyTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof AnyType
  }

  public getDefinition(_type: AnyType): Definition {
    return {}
  }

  public getChildren(_type: AnyType): BaseType[] {
    return []
  }
}
