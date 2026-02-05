import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { NullType } from '../Type/NullType'

export class NullTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof NullType
  }

  public getDefinition(_type: NullType): Definition {
    return { type: 'null' }
  }

  public getChildren(_type: NullType): BaseType[] {
    return []
  }
}
