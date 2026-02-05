import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { StringType } from '../Type/StringType'

export class StringTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof StringType
  }

  public getDefinition(_type: StringType): Definition {
    return { type: 'string' }
  }

  public getChildren(_type: StringType): BaseType[] {
    return []
  }
}
