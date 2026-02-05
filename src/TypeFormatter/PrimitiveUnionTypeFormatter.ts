import type { Definition } from '../Schema/Definition'
import type { RawTypeName } from '../Schema/RawType'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { JsonTypeError } from '../Error/Errors'
import { BooleanType } from '../Type/BooleanType'
import { NullType } from '../Type/NullType'
import { NumberType } from '../Type/NumberType'
import { StringType } from '../Type/StringType'
import { UnionType } from '../Type/UnionType'
import { uniqueArray } from '../Utils/uniqueArray'

export class PrimitiveUnionTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof UnionType && type.getTypes().length > 0 && this.isPrimitiveUnion(type)
  }

  public getDefinition(type: UnionType): Definition {
    return {
      type: uniqueArray(type.getTypes().map(item => this.getPrimitiveType(item))),
    }
  }

  public getChildren(_type: UnionType): BaseType[] {
    return []
  }

  protected isPrimitiveUnion(type: UnionType): boolean {
    return type
      .getTypes()
      .every(
        item =>
          item instanceof StringType
          || item instanceof NumberType
          || item instanceof BooleanType
          || item instanceof NullType,
      )
  }

  protected getPrimitiveType(item: BaseType): RawTypeName {
    if (item instanceof StringType) {
      return 'string'
    }

    if (item instanceof NumberType) {
      return 'number'
    }

    if (item instanceof BooleanType) {
      return 'boolean'
    }

    if (item instanceof NullType) {
      return 'null'
    }

    throw new JsonTypeError('Unexpected code branch', item)
  }
}
