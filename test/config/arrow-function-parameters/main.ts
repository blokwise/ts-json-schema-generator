/* eslint-disable unused-imports/no-unused-vars */

/**
 * @description Type reference description
 */
export type StringValue = string

export function myFunction(stringValue: StringValue,
  /**
   * @description Inline parameter description
   */
  optionalArgument?: string, optionalArgumentWithDefault: number = 42) {
  return 'whatever'
}
