import type { ArrayType } from './ArrayType'
import type { InferType } from './InferType'
import type { TupleType } from './TupleType'
import { BaseType } from './BaseType'

export class RestType extends BaseType {
  public constructor(
    private item: ArrayType | InferType | TupleType,
    private title: string | null = null,
  ) {
    super()
  }

  public getId(): string {
    return `...${this.item.getId()}${this.title || ''}`
  }

  public getTitle(): string | null {
    return this.title
  }

  public getType(): ArrayType | InferType | TupleType {
    return this.item
  }
}
