import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { BooleanType } from '../Type/BooleanType'

export class BooleanTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof BooleanType
  }

  public getDefinition(_type: BooleanType): Definition {
    return { type: 'boolean' }
  }

  public getChildren(_type: BooleanType): BaseType[] {
    return []
  }
}
