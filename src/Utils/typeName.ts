import type { RawType, RawTypeName } from '../Schema/RawType'
import { ExpectationFailedError } from '../Error/Errors'

export function typeName(value: RawType): RawTypeName {
  if (value === null) {
    return 'null'
  }

  const type = typeof value

  if (type === 'string' || type === 'number' || type === 'boolean') {
    return type
  }

  if (Array.isArray(value)) {
    return 'array'
  }

  if (type === 'object') {
    return 'object'
  }

  throw new ExpectationFailedError(`JavaScript type "typeof " can't be converted to JSON type name`)
}
