import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import type { TypeFormatter } from '../TypeFormatter'
import { AliasType } from '../Type/AliasType'

export class AliasTypeFormatter implements SubTypeFormatter {
  public constructor(protected childTypeFormatter: TypeFormatter) {}

  public supportsType(type: BaseType): boolean {
    return type instanceof AliasType
  }

  public getDefinition(type: AliasType): Definition {
    return this.childTypeFormatter.getDefinition(type.getType())
  }

  public getChildren(type: AliasType): BaseType[] {
    return this.childTypeFormatter.getChildren(type.getType())
  }
}
