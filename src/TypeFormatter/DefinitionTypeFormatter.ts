import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { TypeFormatter } from '../TypeFormatter'
import { AliasType } from '../Type/AliasType'
import { BaseType } from '../Type/BaseType'
import { DefinitionType } from '../Type/DefinitionType'
import { uniqueArray } from '../Utils/uniqueArray'

export class DefinitionTypeFormatter implements SubTypeFormatter {
  public constructor(
    protected childTypeFormatter: TypeFormatter,
    protected encodeRefs: boolean,
  ) {}

  public supportsType(type: BaseType): boolean {
    return type instanceof DefinitionType
  }

  public getDefinition(type: DefinitionType): Definition {
    function getTypeImport(type) {
      if (type instanceof AliasType) {
        return type.getTypeImport()
      }

      if (type instanceof BaseType && 'getType' in type && typeof type.getType === 'function') {
        return getTypeImport(type.getType())
      }

      return undefined
    }

    const ref = type.getName()
    const typeImport = getTypeImport(type)

    return {
      $ref: `#/definitions/${this.encodeRefs ? encodeURIComponent(ref) : ref}`,
      ...(typeImport ? { typeImport } : {}),
    }
  }

  public getChildren(type: DefinitionType): BaseType[] {
    return uniqueArray([type, ...this.childTypeFormatter.getChildren(type.getType())])
  }
}
