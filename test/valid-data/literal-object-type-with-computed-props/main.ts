import type { key as importedKey, Keys } from './module'

const key = 'localKey'

enum LocalKeys {
  Key = 'localEnumKey',
}

export interface MyType {
  [key]: string
  [LocalKeys.Key]: string
  [importedKey]: string
  [Keys.Key]: string
}
