import type { FunctionOptions } from '../Config'
import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import type { TypeFormatter } from '../TypeFormatter'
import { FunctionType } from '../Type/FunctionType'

export class FunctionTypeFormatter implements SubTypeFormatter {
  constructor(
    protected childTypeFormatter: TypeFormatter,
    protected functions: FunctionOptions,
  ) {}

  public supportsType(type: BaseType): boolean {
    return type instanceof FunctionType
  }

  public getDefinition(type: FunctionType): Definition {
    const namedArgs = type.getNamedArguments()
    if (namedArgs) {
      return {
        $comment: type.getComment(),
        type: 'object',
        properties: {
          namedArgs: this.childTypeFormatter.getDefinition(namedArgs),
        },
      }
    }

    return {
      $comment: type.getComment(),
    }
  }

  public getChildren(type: FunctionType): BaseType[] {
    const namedArgs = type.getNamedArguments()
    return namedArgs ? this.childTypeFormatter.getChildren(namedArgs) : []
  }
}
