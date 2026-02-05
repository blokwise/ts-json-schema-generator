import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { VoidType } from '../Type/VoidType'

export class VoidTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof VoidType
  }

  public getDefinition(_type: VoidType): Definition {
    return { type: 'null' }
  }

  public getChildren(_type: VoidType): BaseType[] {
    return []
  }
}
