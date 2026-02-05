import { PrimitiveType } from './PrimitiveType'

export class StringType extends PrimitiveType {
  constructor(protected preserveLiterals = false) {
    super()
  }

  public getId(): string {
    return 'string'
  }

  public getPreserveLiterals(): boolean {
    return this.preserveLiterals
  }
}
