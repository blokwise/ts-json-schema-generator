import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import { SymbolType } from '../Type/SymbolType'

export class SymbolTypeFormatter implements SubTypeFormatter {
  public supportsType(type: BaseType): boolean {
    return type instanceof SymbolType
  }

  public getDefinition(_type: SymbolType): Definition {
    return {}
  }

  public getChildren(_type: SymbolType): BaseType[] {
    return []
  }
}
