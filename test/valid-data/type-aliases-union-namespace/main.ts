/* eslint-disable ts/no-namespace */
/* eslint-disable ts/no-redeclare */

namespace Cardinal {
  export const NORTH = 'north' as const
  export const SOUTH = 'south' as const
  export const EAST = 'east' as const
  export const WEST = 'west' as const
}

type Cardinal = typeof Cardinal.NORTH | typeof Cardinal.SOUTH | typeof Cardinal.EAST | typeof Cardinal.WEST

export type {
  Cardinal,
}

export interface MyModel {
  direction: Cardinal
}
