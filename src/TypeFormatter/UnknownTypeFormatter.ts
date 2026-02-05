import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { UnknownType } from '../Type/UnknownType'

export class UnknownTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof UnknownType
  }

  public getDefinition(type: UnknownType): Definition {
    if (type.erroredSource) {
      return { description: 'Failed to correctly infer type' }
    }

    return {}
  }

  public getChildren(): BaseType[] {
    return []
  }
}
