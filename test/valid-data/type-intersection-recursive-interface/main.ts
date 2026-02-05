export interface Container {
  children: Container[]
}

export interface Dummy {
  x: number
}

export type Intersection = Container & Dummy
