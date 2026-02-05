import type ts from 'typescript'
import type { CompletedConfig } from '../Config'
import type { MutableParser } from '../MutableParser'
import type { NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import { BasicAnnotationsReader } from '../AnnotationsReader/BasicAnnotationsReader'
import { ExtendedAnnotationsReader } from '../AnnotationsReader/ExtendedAnnotationsReader'
import { ChainNodeParser } from '../ChainNodeParser'
import { CircularReferenceNodeParser } from '../CircularReferenceNodeParser'
import { ExposeNodeParser } from '../ExposeNodeParser'
import { AnnotatedNodeParser } from '../NodeParser/AnnotatedNodeParser'
import { AnyTypeNodeParser } from '../NodeParser/AnyTypeNodeParser'
import { ArrayLiteralExpressionNodeParser } from '../NodeParser/ArrayLiteralExpressionNodeParser'
import { ArrayNodeParser } from '../NodeParser/ArrayNodeParser'
import { AsExpressionNodeParser } from '../NodeParser/AsExpressionNodeParser'
import { BinaryExpressionNodeParser } from '../NodeParser/BinaryExpressionNodeParser'
import { BooleanLiteralNodeParser } from '../NodeParser/BooleanLiteralNodeParser'
import { BooleanTypeNodeParser } from '../NodeParser/BooleanTypeNodeParser'
import { CallExpressionParser } from '../NodeParser/CallExpressionParser'
import { ConditionalTypeNodeParser } from '../NodeParser/ConditionalTypeNodeParser'
import { ConstructorNodeParser } from '../NodeParser/ConstructorNodeParser'
import { EnumNodeParser } from '../NodeParser/EnumNodeParser'
import { ExpressionWithTypeArgumentsNodeParser } from '../NodeParser/ExpressionWithTypeArgumentsNodeParser'
import { FunctionNodeParser } from '../NodeParser/FunctionNodeParser'
import { HiddenNodeParser } from '../NodeParser/HiddenTypeNodeParser'
import { IdentifierNodeParser } from '../NodeParser/IdentifierNodeParser'
import { IndexedAccessTypeNodeParser } from '../NodeParser/IndexedAccessTypeNodeParser'
import { InferTypeNodeParser } from '../NodeParser/InferTypeNodeParser'
import { InterfaceAndClassNodeParser } from '../NodeParser/InterfaceAndClassNodeParser'
import { IntersectionNodeParser } from '../NodeParser/IntersectionNodeParser'
import { IntrinsicNodeParser } from '../NodeParser/IntrinsicNodeParser'
import { LiteralNodeParser } from '../NodeParser/LiteralNodeParser'
import { MappedTypeNodeParser } from '../NodeParser/MappedTypeNodeParser'
import { NamedTupleMemberNodeParser } from '../NodeParser/NamedTupleMemberNodeParser'
import { NeverTypeNodeParser } from '../NodeParser/NeverTypeNodeParser'
import { NewExpressionParser } from '../NodeParser/NewExpressionParser'
import { NullLiteralNodeParser } from '../NodeParser/NullLiteralNodeParser'
import { NumberLiteralNodeParser } from '../NodeParser/NumberLiteralNodeParser'
import { NumberTypeNodeParser } from '../NodeParser/NumberTypeNodeParser'
import { ObjectLiteralExpressionNodeParser } from '../NodeParser/ObjectLiteralExpressionNodeParser'
import { ObjectTypeNodeParser } from '../NodeParser/ObjectTypeNodeParser'
import { OptionalTypeNodeParser } from '../NodeParser/OptionalTypeNodeParser'
import { ParameterParser } from '../NodeParser/ParameterParser'
import { ParenthesizedNodeParser } from '../NodeParser/ParenthesizedNodeParser'
import { PrefixUnaryExpressionNodeParser } from '../NodeParser/PrefixUnaryExpressionNodeParser'
import { PromiseNodeParser } from '../NodeParser/PromiseNodeParser'
import { PropertyAccessExpressionParser } from '../NodeParser/PropertyAccessExpressionParser'
import { RestTypeNodeParser } from '../NodeParser/RestTypeNodeParser'
import { SatisfiesNodeParser } from '../NodeParser/SatisfiesNodeParser'
import { SpreadElementNodeParser } from '../NodeParser/SpreadElementNodeParser'
import { StringLiteralNodeParser } from '../NodeParser/StringLiteralNodeParser'
import { StringTemplateLiteralNodeParser } from '../NodeParser/StringTemplateLiteralNodeParser'
import { StringTypeNodeParser } from '../NodeParser/StringTypeNodeParser'
import { SymbolTypeNodeParser } from '../NodeParser/SymbolTypeNodeParser'
import { TupleNodeParser } from '../NodeParser/TupleNodeParser'
import { TypeAliasNodeParser } from '../NodeParser/TypeAliasNodeParser'
import { TypeLiteralNodeParser } from '../NodeParser/TypeLiteralNodeParser'
import { TypeofNodeParser } from '../NodeParser/TypeofNodeParser'
import { TypeOperatorNodeParser } from '../NodeParser/TypeOperatorNodeParser'
import { TypeReferenceNodeParser } from '../NodeParser/TypeReferenceNodeParser'
import { UndefinedTypeNodeParser } from '../NodeParser/UndefinedTypeNodeParser'
import { UnionNodeParser } from '../NodeParser/UnionNodeParser'
import { UnknownTypeNodeParser } from '../NodeParser/UnknownTypeNodeParser'
import { VoidTypeNodeParser } from '../NodeParser/VoidTypeNodeParser'
import { TopRefNodeParser } from '../TopRefNodeParser'
import { castArray } from '../Utils/castArray'

export type ParserAugmentor = (parser: MutableParser) => void

export function createParser(program: ts.Program, config: CompletedConfig, augmentor?: ParserAugmentor): NodeParser {
  const typeChecker = program.getTypeChecker()
  const chainNodeParser = new ChainNodeParser(typeChecker, [])

  function withExpose(nodeParser: SubNodeParser): SubNodeParser {
    return new ExposeNodeParser(typeChecker, nodeParser, config.expose, config.jsDoc)
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  function withTopRef(nodeParser: NodeParser): NodeParser {
    const typeArr = castArray(config.type)
    // If we have multiple types, don't set a top-level $ref.
    const topRefFullName = typeArr && typeArr.length === 1 ? typeArr[0] : undefined
    return new TopRefNodeParser(chainNodeParser, topRefFullName, config.topRef)
  }

  function withJsDoc(nodeParser: SubNodeParser): SubNodeParser {
    const extraTags = new Set(config.extraTags)
    if (config.jsDoc === 'extended') {
      return new AnnotatedNodeParser(
        nodeParser,
        new ExtendedAnnotationsReader(
          typeChecker,
          extraTags,
          config.markdownDescription,
          config.fullDescription,
        ),
      )
    }
    else if (config.jsDoc === 'basic') {
      return new AnnotatedNodeParser(nodeParser, new BasicAnnotationsReader(extraTags))
    }
    else {
      return nodeParser
    }
  }

  function withCircular(nodeParser: SubNodeParser): SubNodeParser {
    return new CircularReferenceNodeParser(nodeParser)
  }

  if (augmentor) {
    augmentor(chainNodeParser)
  }

  chainNodeParser
    .addNodeParser(new HiddenNodeParser(typeChecker))
    .addNodeParser(new StringTypeNodeParser())
    .addNodeParser(new SymbolTypeNodeParser())
    .addNodeParser(new NumberTypeNodeParser())
    .addNodeParser(new BooleanTypeNodeParser())
    .addNodeParser(new AnyTypeNodeParser())
    .addNodeParser(new UnknownTypeNodeParser())
    .addNodeParser(new VoidTypeNodeParser())
    .addNodeParser(new UndefinedTypeNodeParser())
    .addNodeParser(new NeverTypeNodeParser())
    .addNodeParser(new ObjectTypeNodeParser())
    .addNodeParser(new AsExpressionNodeParser(chainNodeParser))
    .addNodeParser(new BinaryExpressionNodeParser(chainNodeParser))
    .addNodeParser(new SatisfiesNodeParser(chainNodeParser))
    .addNodeParser(withJsDoc(new ParameterParser(chainNodeParser)))
    .addNodeParser(new StringLiteralNodeParser())
    .addNodeParser(new StringTemplateLiteralNodeParser(chainNodeParser))
    .addNodeParser(new IntrinsicNodeParser())
    .addNodeParser(new NumberLiteralNodeParser())
    .addNodeParser(new BooleanLiteralNodeParser())
    .addNodeParser(new NullLiteralNodeParser())
    .addNodeParser(new ObjectLiteralExpressionNodeParser(chainNodeParser, typeChecker))
    .addNodeParser(new ArrayLiteralExpressionNodeParser(chainNodeParser))

    .addNodeParser(new PrefixUnaryExpressionNodeParser(chainNodeParser))

    .addNodeParser(new LiteralNodeParser(chainNodeParser))
    .addNodeParser(new ParenthesizedNodeParser(chainNodeParser))

    .addNodeParser(new PromiseNodeParser(typeChecker, chainNodeParser))
    .addNodeParser(new TypeReferenceNodeParser(typeChecker, chainNodeParser))
    .addNodeParser(new ExpressionWithTypeArgumentsNodeParser(typeChecker, chainNodeParser))
    .addNodeParser(new IndexedAccessTypeNodeParser(typeChecker, chainNodeParser))
    .addNodeParser(new InferTypeNodeParser(typeChecker, chainNodeParser))
    .addNodeParser(new TypeofNodeParser(typeChecker, chainNodeParser))
    .addNodeParser(new MappedTypeNodeParser(chainNodeParser, config.additionalProperties))
    .addNodeParser(new ConditionalTypeNodeParser(typeChecker, chainNodeParser))
    .addNodeParser(new TypeOperatorNodeParser(chainNodeParser))

    .addNodeParser(new UnionNodeParser(typeChecker, chainNodeParser))
    .addNodeParser(new IntersectionNodeParser(typeChecker, chainNodeParser))
    .addNodeParser(new TupleNodeParser(typeChecker, chainNodeParser))
    .addNodeParser(new NamedTupleMemberNodeParser(chainNodeParser))
    .addNodeParser(new OptionalTypeNodeParser(chainNodeParser))
    .addNodeParser(new RestTypeNodeParser(chainNodeParser))
    .addNodeParser(new IdentifierNodeParser(chainNodeParser, typeChecker))
    .addNodeParser(new SpreadElementNodeParser(chainNodeParser))

    .addNodeParser(new CallExpressionParser(typeChecker, chainNodeParser))
    .addNodeParser(new NewExpressionParser(typeChecker, chainNodeParser))
    .addNodeParser(new PropertyAccessExpressionParser(typeChecker, chainNodeParser))

    .addNodeParser(withCircular(withExpose(withJsDoc(new TypeAliasNodeParser(typeChecker, chainNodeParser)))))
    .addNodeParser(withExpose(withJsDoc(new EnumNodeParser(typeChecker))))
    .addNodeParser(
      withCircular(
        withExpose(
          withJsDoc(
            new InterfaceAndClassNodeParser(
              typeChecker,
              withJsDoc(chainNodeParser),
              config.additionalProperties,
            ),
          ),
        ),
      ),
    )
    .addNodeParser(
      withCircular(
        withExpose(
          withJsDoc(
            new TypeLiteralNodeParser(typeChecker, withJsDoc(chainNodeParser), config.additionalProperties),
          ),
        ),
      ),
    )

    .addNodeParser(new ArrayNodeParser(chainNodeParser))

  if (config.functions !== 'fail') {
    chainNodeParser
      .addNodeParser(new ConstructorNodeParser(chainNodeParser, config.functions))
      .addNodeParser(new FunctionNodeParser(chainNodeParser, config.functions))
  }

  return withTopRef(chainNodeParser)
}
