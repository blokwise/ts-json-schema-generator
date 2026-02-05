import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { LiteralType } from '../Type/LiteralType'
import { typeName } from '../Utils/typeName'

export class LiteralTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof LiteralType
  }

  public getDefinition(type: LiteralType): Definition {
    return {
      type: typeName(type.getValue()),
      const: type.getValue(),
    }
  }

  public getChildren(_type: LiteralType): BaseType[] {
    return []
  }
}
