import type { Context, NodeParser } from '../NodeParser'
import type { SubNodeParser } from '../SubNodeParser'
import type { BaseType } from '../Type/BaseType'
import ts from 'typescript'
import { ExpectationFailedError, UnknownNodeError } from '../Error/Errors'
import { IntersectionType } from '../Type/IntersectionType'
import { ObjectProperty, ObjectType } from '../Type/ObjectType'
import { getKey } from '../Utils/nodeKey'

export class ObjectLiteralExpressionNodeParser implements SubNodeParser {
  public constructor(
    protected childNodeParser: NodeParser,
    protected checker: ts.TypeChecker,
  ) {}

  public supportsNode(node: ts.ObjectLiteralExpression): boolean {
    return node.kind === ts.SyntaxKind.ObjectLiteralExpression
  }

  public createType(node: ts.ObjectLiteralExpression, context: Context): BaseType {
    const spreadAssignments: ts.SpreadAssignment[] = []
    const properties: ts.ObjectLiteralElementLike[] = []

    for (const prop of node.properties) {
      if (ts.isSpreadAssignment(prop)) {
        spreadAssignments.push(prop)
      }
      else {
        properties.push(prop)
      }
    }

    const parsedProperties = this.parseProperties(properties, context)
    const object = new ObjectType(`object-${getKey(node, context)}`, [], parsedProperties, false)

    if (!spreadAssignments.length) {
      return object
    }

    const types: BaseType[] = [object]

    for (const spread of spreadAssignments) {
      const referenced = this.checker.typeToTypeNode(
        this.checker.getTypeAtLocation(spread.expression),
        undefined,
        ts.NodeBuilderFlags.NoTruncation,
      )

      if (!referenced) {
        throw new ExpectationFailedError('Could not find reference for spread type', spread)
      }

      types.push(this.childNodeParser.createType(referenced, context))
    }

    return new IntersectionType(types)
  }

  private parseProperties(properties: ts.ObjectLiteralElementLike[], context: Context): ObjectProperty[] {
    return properties.flatMap((t) => {
      // parsed previously
      if (ts.isSpreadAssignment(t)) {
        return []
      }

      if (!t.name) {
        throw new UnknownNodeError(t)
      }

      let type: ts.Node | undefined

      if (ts.isShorthandPropertyAssignment(t)) {
        type = this.checker.typeToTypeNode(
          this.checker.getTypeAtLocation(t),
          undefined,
          ts.NodeBuilderFlags.NoTruncation,
        )
      }
      else if (ts.isPropertyAssignment(t)) {
        type = t.initializer
      }
      else {
        type = t
      }

      if (!type) {
        throw new ExpectationFailedError('Could not find type for property', t)
      }

      return new ObjectProperty(
        t.name.getText(),
        this.childNodeParser.createType(type, context),
        !(t as any).questionToken,
      )
    })
  }
}
