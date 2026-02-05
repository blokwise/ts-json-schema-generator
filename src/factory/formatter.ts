import type { CompletedConfig } from '../Config'
import type { MutableTypeFormatter } from '../MutableTypeFormatter'
import type { TypeFormatter } from '../TypeFormatter'
import { ChainTypeFormatter } from '../ChainTypeFormatter'
import { CircularReferenceTypeFormatter } from '../CircularReferenceTypeFormatter'
import { AliasTypeFormatter } from '../TypeFormatter/AliasTypeFormatter'
import { AnnotatedTypeFormatter } from '../TypeFormatter/AnnotatedTypeFormatter'
import { AnyTypeFormatter } from '../TypeFormatter/AnyTypeFormatter'
import { ArrayTypeFormatter } from '../TypeFormatter/ArrayTypeFormatter'
import { BooleanTypeFormatter } from '../TypeFormatter/BooleanTypeFormatter'
import { ConstructorTypeFormatter } from '../TypeFormatter/ConstructorTypeFormatter'
import { DefinitionTypeFormatter } from '../TypeFormatter/DefinitionTypeFormatter'
import { EnumTypeFormatter } from '../TypeFormatter/EnumTypeFormatter'
import { FunctionTypeFormatter } from '../TypeFormatter/FunctionTypeFormatter'
import { HiddenTypeFormatter } from '../TypeFormatter/HiddenTypeFormatter'
import { IntersectionTypeFormatter } from '../TypeFormatter/IntersectionTypeFormatter'
import { LiteralTypeFormatter } from '../TypeFormatter/LiteralTypeFormatter'
import { LiteralUnionTypeFormatter } from '../TypeFormatter/LiteralUnionTypeFormatter'
import { NeverTypeFormatter } from '../TypeFormatter/NeverTypeFormatter'
import { NullTypeFormatter } from '../TypeFormatter/NullTypeFormatter'
import { NumberTypeFormatter } from '../TypeFormatter/NumberTypeFormatter'
import { ObjectTypeFormatter } from '../TypeFormatter/ObjectTypeFormatter'
import { OptionalTypeFormatter } from '../TypeFormatter/OptionalTypeFormatter'
import { PrimitiveUnionTypeFormatter } from '../TypeFormatter/PrimitiveUnionTypeFormatter'
import { ReferenceTypeFormatter } from '../TypeFormatter/ReferenceTypeFormatter'
import { RestTypeFormatter } from '../TypeFormatter/RestTypeFormatter'
import { StringTypeFormatter } from '../TypeFormatter/StringTypeFormatter'
import { SymbolTypeFormatter } from '../TypeFormatter/SymbolTypeFormatter'
import { TupleTypeFormatter } from '../TypeFormatter/TupleTypeFormatter'
import { UndefinedTypeFormatter } from '../TypeFormatter/UndefinedTypeFormatter'
import { UnionTypeFormatter } from '../TypeFormatter/UnionTypeFormatter'
import { UnknownTypeFormatter } from '../TypeFormatter/UnknownTypeFormatter'
import { VoidTypeFormatter } from '../TypeFormatter/VoidTypeFormatter'

export type FormatterAugmentor = (
  formatter: MutableTypeFormatter,
  circularReferenceTypeFormatter: CircularReferenceTypeFormatter,
) => void

export function createFormatter(config: CompletedConfig, augmentor?: FormatterAugmentor): TypeFormatter {
  const chainTypeFormatter = new ChainTypeFormatter([])
  const circularReferenceTypeFormatter = new CircularReferenceTypeFormatter(chainTypeFormatter)

  if (augmentor) {
    augmentor(chainTypeFormatter, circularReferenceTypeFormatter)
  }

  chainTypeFormatter
    .addTypeFormatter(new AnnotatedTypeFormatter(circularReferenceTypeFormatter))

    .addTypeFormatter(new StringTypeFormatter())
    .addTypeFormatter(new NumberTypeFormatter())
    .addTypeFormatter(new BooleanTypeFormatter())
    .addTypeFormatter(new NullTypeFormatter())
    .addTypeFormatter(new SymbolTypeFormatter())

    .addTypeFormatter(new AnyTypeFormatter())
    .addTypeFormatter(new UndefinedTypeFormatter())
    .addTypeFormatter(new UnknownTypeFormatter())
    .addTypeFormatter(new VoidTypeFormatter())
    .addTypeFormatter(new HiddenTypeFormatter())
    .addTypeFormatter(new NeverTypeFormatter())

    .addTypeFormatter(new LiteralTypeFormatter())
    .addTypeFormatter(new EnumTypeFormatter())

    .addTypeFormatter(new ReferenceTypeFormatter(circularReferenceTypeFormatter, config.encodeRefs ?? true))
    .addTypeFormatter(new DefinitionTypeFormatter(circularReferenceTypeFormatter, config.encodeRefs ?? true))
    .addTypeFormatter(new ObjectTypeFormatter(circularReferenceTypeFormatter))
    .addTypeFormatter(new AliasTypeFormatter(circularReferenceTypeFormatter))

    .addTypeFormatter(new PrimitiveUnionTypeFormatter())
    .addTypeFormatter(new LiteralUnionTypeFormatter())

    .addTypeFormatter(new ConstructorTypeFormatter(circularReferenceTypeFormatter, config.functions))
    .addTypeFormatter(new FunctionTypeFormatter(circularReferenceTypeFormatter, config.functions))

    .addTypeFormatter(new OptionalTypeFormatter(circularReferenceTypeFormatter))
    .addTypeFormatter(new RestTypeFormatter(circularReferenceTypeFormatter))

    .addTypeFormatter(new ArrayTypeFormatter(circularReferenceTypeFormatter))
    .addTypeFormatter(new TupleTypeFormatter(circularReferenceTypeFormatter))
    .addTypeFormatter(new UnionTypeFormatter(circularReferenceTypeFormatter, config.discriminatorType))
    .addTypeFormatter(new IntersectionTypeFormatter(circularReferenceTypeFormatter))

  return circularReferenceTypeFormatter
}
