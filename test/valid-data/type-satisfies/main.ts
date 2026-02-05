/* eslint-disable unused-imports/no-unused-vars */

const record = { x: 'hello', y: 'goodbye' } satisfies Record<string, string>
export type MyType = keyof typeof record
