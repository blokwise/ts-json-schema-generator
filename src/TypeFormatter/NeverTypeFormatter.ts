import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { NeverType } from '../Type/NeverType'

export class NeverTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof NeverType
  }

  public getDefinition(_type: NeverType): Definition {
    return { not: {} }
  }

  public getChildren(_type: NeverType): BaseType[] {
    return []
  }
}
