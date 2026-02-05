import type ts from 'typescript'
import type { Annotations } from '../Type/AnnotatedType'
import json5 from 'json5'
import { getFullDescription } from '../Utils/getFullDescription'
import { symbolAtNode } from '../Utils/symbolAtNode'
import { BasicAnnotationsReader } from './BasicAnnotationsReader'

export class ExtendedAnnotationsReader extends BasicAnnotationsReader {
  public constructor(
    private typeChecker: ts.TypeChecker,
    extraTags?: Set<string>,
    private markdownDescription?: boolean,
    private fullDescription?: boolean,
  ) {
    super(extraTags)
  }

  public getAnnotations(node: ts.Node): Annotations | undefined {
    const annotations: Annotations = {
      ...this.getTitleAnnotation(node),
      ...this.getDescriptionAnnotation(node),
      ...this.getSinceAnnotation(node),
      ...this.getTypeAnnotation(node),
      ...this.getExampleAnnotation(node),
      ...super.getAnnotations(node),
    }
    return Object.keys(annotations).length ? annotations : undefined
  }

  public isNullable(node: ts.Node): boolean {
    const symbol = symbolAtNode(node)
    if (!symbol) {
      return false
    }

    const jsDocTags: ts.JSDocTagInfo[] = symbol.getJsDocTags()
    if (!jsDocTags || !jsDocTags.length) {
      return false
    }

    const jsDocTag: ts.JSDocTagInfo | undefined = jsDocTags.find((tag: ts.JSDocTagInfo) => tag.name === 'nullable')
    return !!jsDocTag
  }

  private getTitleAnnotation(node: ts.Node): Annotations | undefined {
    const symbol = symbolAtNode(node)
    if (!symbol) {
      return undefined
    }

    const annotations: { title?: string, description?: string, markdownDescription?: string, fullDescription?: string } = {}

    const comments: ts.SymbolDisplayPart[] = symbol.getDocumentationComment(this.typeChecker)

    if (comments && comments.length) {
      const markdownTitle = comments
        .map(comment => comment.text)
        .join(' ')
        .replace(/\r/g, '')
        .trim()

      annotations.title = markdownTitle.replace(/(?<=[^\n])\n(?=[^\n*-])/g, ' ').trim()

      if (this.markdownDescription) {
        annotations.markdownDescription = markdownTitle
      }
    }

    if (this.fullDescription) {
      const fullDescription = getFullDescription(node)?.trim()
      if (fullDescription) {
        annotations.fullDescription = fullDescription
      }
    }

    return Object.keys(annotations).length ? annotations : undefined
  }

  private getDescriptionAnnotation(node: ts.Node): Annotations | undefined {
    const symbol = symbolAtNode(node)
    if (!symbol) {
      return undefined
    }

    const jsDocTags: ts.JSDocTagInfo[] = symbol.getJsDocTags()
    if (!jsDocTags || !jsDocTags.length) {
      return undefined
    }

    const description = jsDocTags.find(tag => tag.name === 'description')
    if (!description) {
      return undefined
    }

    return { description }
  }

  private getSinceAnnotation(node: ts.Node): Annotations | undefined {
    const symbol = symbolAtNode(node)
    if (!symbol) {
      return undefined
    }

    const jsDocTags: ts.JSDocTagInfo[] = symbol.getJsDocTags()
    if (!jsDocTags || !jsDocTags.length) {
      return undefined
    }

    const since = jsDocTags.find(tag => tag.name === 'since')
    if (!since) {
      return undefined
    }

    return { since: (since.text ?? []).map(part => part.text).join('') }
  }

  private getTypeAnnotation(node: ts.Node): Annotations | undefined {
    const symbol = symbolAtNode(node)
    if (!symbol) {
      return undefined
    }

    const jsDocTags: ts.JSDocTagInfo[] = symbol.getJsDocTags()
    if (!jsDocTags || !jsDocTags.length) {
      return undefined
    }

    const jsDocTag = jsDocTags.find(tag => tag.name === 'asType')
    if (!jsDocTag) {
      return undefined
    }

    const text = (jsDocTag.text ?? []).map(part => part.text).join('')
    return { type: text }
  }

  /**
   * Attempts to gather examples from the @-example jsdoc tag.
   * See https://tsdoc.org/pages/tags/example/
   */
  private getExampleAnnotation(node: ts.Node): Annotations | undefined {
    const symbol = symbolAtNode(node)
    if (!symbol) {
      return undefined
    }

    const jsDocTags: ts.JSDocTagInfo[] = symbol.getJsDocTags()
    if (!jsDocTags || !jsDocTags.length) {
      return undefined
    }

    const examples: unknown[] = []
    for (const example of jsDocTags.filter(tag => tag.name === 'example')) {
      const text = (example.text ?? []).map(part => part.text).join('')
      try {
        examples.push(json5.parse(text))
      }
      catch {
        // ignore examples which don't parse to valid JSON
        // This could be improved to support a broader range of usages,
        // such as if the example has a title (as explained in the tsdoc spec).
      }
    }

    if (examples.length === 0) {
      return undefined
    }

    return { examples }
  }
}
