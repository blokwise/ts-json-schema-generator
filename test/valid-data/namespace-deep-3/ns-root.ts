/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable ts/no-namespace */

namespace RootNamespace {
  export interface Def {
    nest: Def
    prev: RootNamespace.Def

    propA: SubNamespace.HelperA
    propB: SubNamespace.HelperB
  }
}
