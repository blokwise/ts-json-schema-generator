import type { MutableTypeFormatter } from './MutableTypeFormatter'
import type { Definition } from './Schema/Definition'
import type { SubTypeFormatter } from './SubTypeFormatter'
import type { BaseType } from './Type/BaseType'
import { UnknownTypeError } from './Error/Errors'

export class ChainTypeFormatter implements SubTypeFormatter, MutableTypeFormatter {
  public constructor(protected typeFormatters: SubTypeFormatter[]) {}

  public addTypeFormatter(typeFormatter: SubTypeFormatter): this {
    this.typeFormatters.push(typeFormatter)
    return this
  }

  public supportsType(type: BaseType): boolean {
    return this.typeFormatters.some(typeFormatter => typeFormatter.supportsType(type))
  }

  public getDefinition(type: BaseType): Definition {
    return this.getTypeFormatter(type).getDefinition(type)
  }

  public getChildren(type: BaseType): BaseType[] {
    return this.getTypeFormatter(type).getChildren(type)
  }

  protected getTypeFormatter(type: BaseType): SubTypeFormatter {
    for (const typeFormatter of this.typeFormatters) {
      if (typeFormatter.supportsType(type)) {
        return typeFormatter
      }
    }

    throw new UnknownTypeError(type)
  }
}
