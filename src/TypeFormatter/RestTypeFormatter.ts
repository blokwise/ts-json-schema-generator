import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import type { TypeFormatter } from '../TypeFormatter'
import { RestType } from '../Type/RestType'

export class RestTypeFormatter implements SubTypeFormatter {
  public constructor(protected childTypeFormatter: TypeFormatter) {}

  public supportsType(type: BaseType): boolean {
    return type instanceof RestType
  }

  public getDefinition(type: RestType): Definition {
    const definition = this.childTypeFormatter.getDefinition(type.getType())
    const title = type.getTitle()

    if (title !== null && typeof definition.items === 'object') {
      return { ...definition, items: { ...definition.items, title } }
    }

    return definition
  }

  public getChildren(type: RestType): BaseType[] {
    return this.childTypeFormatter.getChildren(type.getType())
  }
}
