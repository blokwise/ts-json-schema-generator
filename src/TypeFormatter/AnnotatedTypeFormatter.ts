import type { Definition } from '../Schema/Definition'
import type { SubTypeFormatter } from '../SubTypeFormatter'
import type { BaseType } from '../Type/BaseType'
import type { TypeFormatter } from '../TypeFormatter'
import { JsonTypeError } from '../Error/Errors'
import { AnnotatedType } from '../Type/AnnotatedType'
import { UnionType } from '../Type/UnionType'
import { derefType } from '../Utils/derefType'

export function makeNullable(def: Definition): Definition {
  const union = (def.oneOf || def.anyOf) as Definition[] | undefined
  if (union && union.filter((d: Definition) => d.type === 'null').length === 0) {
    union.push({ type: 'null' })
  }
  else if (def.type && def.type !== 'object') {
    if (Array.isArray(def.type)) {
      if (!def.type.includes('null')) {
        def.type.push('null')
      }
    }
    else if (def.type !== 'null') {
      def.type = [def.type, 'null']
    }

    // enums need null as an option
    if (def.enum && !def.enum.includes(null)) {
      def.enum.push(null)
    }
  }
  else {
    const subdef: Definition = {}

    if ('anyOf' in def) {
      for (const d of def.anyOf as Definition[]) {
        if (d.type === 'null') {
          return def
        }
      }
    }

    for (const key of Object.keys(def) as (keyof Definition)[]) {
      if (key !== 'description' && key !== 'title' && key !== 'default') {
        (subdef as any)[key] = def[key] as any
        delete def[key]
      }
    }
    def.anyOf = [subdef, { type: 'null' }]
  }
  return def
}

export class AnnotatedTypeFormatter implements SubTypeFormatter {
  public constructor(protected childTypeFormatter: TypeFormatter) {}

  public supportsType(type: BaseType): boolean {
    return type instanceof AnnotatedType
  }

  public getDefinition(type: AnnotatedType): Definition {
    const annotations = type.getAnnotations()

    if ('discriminator' in annotations) {
      const deref = derefType(type.getType())
      if (deref instanceof UnionType) {
        deref.setDiscriminator(annotations.discriminator as string)
        delete annotations.discriminator
      }
      else {
        throw new JsonTypeError(
          `Cannot assign discriminator tag to type: ${deref.getName()}. This tag can only be assigned to union types.`,
          deref,
        )
      }
    }

    const def: Definition = {
      ...this.childTypeFormatter.getDefinition(type.getType()),
      ...type.getAnnotations(),
    }

    if ('$ref' in def && 'type' in def) {
      delete def.$ref
    }

    if (type.isNullable()) {
      return makeNullable(def)
    }

    return def
  }

  public getChildren(type: AnnotatedType): BaseType[] {
    return this.childTypeFormatter.getChildren(type.getType())
  }
}
