export interface HasPromise<T> { a: Promise<T | undefined> }

export type ConcreteHasPromise = HasPromise<string>
