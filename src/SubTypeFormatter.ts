import type { BaseType } from './Type/BaseType'
import type { TypeFormatter } from './TypeFormatter'

export interface SubTypeFormatter extends TypeFormatter {
  supportsType: (type: BaseType) => boolean
}
