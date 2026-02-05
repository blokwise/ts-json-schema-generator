import type { JSONSchema7Definition } from 'json-schema'
import type { Definition } from '../Schema/Definition'
import type { RawType } from '../Schema/RawType'
import { intersectionOfArrays } from './intersectionOfArrays'

/**
 * Merges nested objects and arrays.
 *
 * @param a - lhs to merge.
 * @param b - rhs to merge.
 * @returns a and b merged together.
 */
export function deepMerge(
  a: { [key: string]: JSONSchema7Definition },
  b: { [key: string]: JSONSchema7Definition },
): { [x: string]: JSONSchema7Definition } {
  const output = { ...structuredClone(a), ...structuredClone(b) }

  for (const key in a) {
    if (Object.prototype.hasOwnProperty.call(b, key)) {
      const elementA = a[key as keyof Definition]
      const elementB = b[key as keyof Definition]

      if (
        elementA != null
        && elementB != null
        && typeof elementA === 'object'
        && typeof elementB === 'object'
        && 'type' in elementA
        && 'type' in elementB
      ) {
        if (elementA.type === elementB.type) {
          const enums = mergeConstsAndEnums(elementA, elementB)
          if (enums != null) {
            const isSingle = enums.length === 1;
            (output as any)[key][isSingle ? 'const' : 'enum'] = isSingle ? enums[0] : enums
            delete (output as any)[key][isSingle ? 'enum' : 'const']
          }
        }
      }
    }
  }

  return output
}

function mergeConstsAndEnums(a: Definition, b: Definition): RawType[] | undefined {
  // NOTE: const is basically a syntactic sugar for an enum with a single element.
  const enumA = a.const !== undefined ? [a.const] : a.enum
  const enumB = b.const !== undefined ? [b.const] : b.enum

  if (enumA === null && enumB != null) {
    return enumB
  }
  else if (enumA != null && enumB === null) {
    return enumA
  }
  else if (enumA != null && enumB != null) {
    return intersectionOfArrays(enumA, enumB)
  }
  else {
    return undefined
  }
}
