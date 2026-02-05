import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { UndefinedType } from '../Type/UndefinedType'

export class UndefinedTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof UndefinedType
  }

  public getDefinition(_type: UndefinedType): Definition {
    return { not: {} }
  }

  public getChildren(_type: UndefinedType): BaseType[] {
    return []
  }
}
