/* eslint-disable unused-imports/no-unused-vars */

import type { Size } from './Size'

enum Orientation {
  Horizontal,
  Vertical,
}

export interface MyObject {
  sizeName?: keyof typeof Size
  orientationName?: keyof typeof Orientation
}
