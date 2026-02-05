# Changelog


## v2.6.0

[compare changes](https://github.com/blokwise/ts-json-schema-generator/compare/v2.6.0...v2.6.0)

### 🏡 Chore

- Adjust repo url in package json for releasing ([bf537cf](https://github.com/blokwise/ts-json-schema-generator/commit/bf537cf))

### ❤️ Contributors

- Julian Derungs ([@aerophobic](https://github.com/aerophobic))

## v2.6.0

[compare changes](https://github.com/vega/ts-json-schema-generator/compare/v2.5.0-next.16...v2.6.0)

### 🚀 Enhancements

- Extract jsdoc annotations as structured object with title and read @description and @since annotations aswell ([81e7ec4](https://github.com/vega/ts-json-schema-generator/commit/81e7ec4))
- Wrap all reference types as definition types ([3bce08f](https://github.com/vega/ts-json-schema-generator/commit/3bce08f))
- Read and keep type import statements of alias types ([755ffa9](https://github.com/vega/ts-json-schema-generator/commit/755ffa9))

### 🩹 Fixes

- Remove `removeComments` from `tsconfig.json` ([#2443](https://github.com/vega/ts-json-schema-generator/pull/2443))
- Error "has multiple definitions" with discriminate unions ([#1836](https://github.com/vega/ts-json-schema-generator/pull/1836))
- Create new typeCache if there has not been one created yet ([56a0493](https://github.com/vega/ts-json-schema-generator/commit/56a0493))
- Bin path in package json ([b6ef596](https://github.com/vega/ts-json-schema-generator/commit/b6ef596))

### 💅 Refactors

- Remove all .js file extensions from imports and lint files ([0171f21](https://github.com/vega/ts-json-schema-generator/commit/0171f21))
- Move CLI entrypoint to src/bin ([913b3cc](https://github.com/vega/ts-json-schema-generator/commit/913b3cc))

### 📦 Build

- Migrate to obuild for build and switch to ESM build only ([a313d20](https://github.com/vega/ts-json-schema-generator/commit/a313d20))

### 🏡 Chore

- **deps-dev:** Bump prettier from 3.7.3 to 3.7.4 ([#2423](https://github.com/vega/ts-json-schema-generator/pull/2423))
- **deps-dev:** Bump typescript-eslint from 8.48.0 to 8.48.1 ([#2422](https://github.com/vega/ts-json-schema-generator/pull/2422))
- **deps-dev:** Bump try from 1.0.1 to 1.0.3 ([#2431](https://github.com/vega/ts-json-schema-generator/pull/2431))
- **deps-dev:** Bump typescript-eslint from 8.48.1 to 8.49.0 ([#2427](https://github.com/vega/ts-json-schema-generator/pull/2427))
- **deps-dev:** Bump @eslint/js from 9.39.1 to 9.39.2 ([#2428](https://github.com/vega/ts-json-schema-generator/pull/2428))
- **deps-dev:** Bump eslint from 9.39.1 to 9.39.2 ([#2429](https://github.com/vega/ts-json-schema-generator/pull/2429))
- **deps-dev:** Bump typescript-eslint from 8.49.0 to 8.50.0 ([#2436](https://github.com/vega/ts-json-schema-generator/pull/2436))
- **deps-dev:** Bump @types/node from 24.10.1 to 24.10.4 ([#2435](https://github.com/vega/ts-json-schema-generator/pull/2435))
- **deps-dev:** Bump typescript-eslint from 8.50.0 to 8.50.1 ([#2437](https://github.com/vega/ts-json-schema-generator/pull/2437))
- **deps-dev:** Bump typescript-eslint from 8.50.1 to 8.51.0 ([#2439](https://github.com/vega/ts-json-schema-generator/pull/2439))
- **deps-dev:** Bump globals from 16.5.0 to 17.0.0 ([#2438](https://github.com/vega/ts-json-schema-generator/pull/2438))
- **deps-dev:** Bump @types/node from 24.10.4 to 24.10.7 ([#2445](https://github.com/vega/ts-json-schema-generator/pull/2445))
- **deps-dev:** Bump typescript-eslint from 8.51.0 to 8.52.0 ([#2444](https://github.com/vega/ts-json-schema-generator/pull/2444))
- **deps-dev:** Bump eslint-plugin-prettier from 5.5.4 to 5.5.5 ([#2450](https://github.com/vega/ts-json-schema-generator/pull/2450))
- **deps-dev:** Bump prettier from 3.7.4 to 3.8.0 ([#2449](https://github.com/vega/ts-json-schema-generator/pull/2449))
- **deps-dev:** Bump vega-lite from 6.4.1 to 6.4.2 ([#2448](https://github.com/vega/ts-json-schema-generator/pull/2448))
- **deps-dev:** Bump @types/node from 24.10.7 to 24.10.9 ([#2447](https://github.com/vega/ts-json-schema-generator/pull/2447))
- **deps-dev:** Bump typescript-eslint from 8.52.0 to 8.53.0 ([#2446](https://github.com/vega/ts-json-schema-generator/pull/2446))
- **deps-dev:** Bump lodash from 4.17.21 to 4.17.23 ([#2451](https://github.com/vega/ts-json-schema-generator/pull/2451))
- **deps-dev:** Bump prettier from 3.8.0 to 3.8.1 ([#2454](https://github.com/vega/ts-json-schema-generator/pull/2454))
- **deps-dev:** Bump globals from 17.0.0 to 17.1.0 ([#2453](https://github.com/vega/ts-json-schema-generator/pull/2453))
- **deps-dev:** Bump typescript-eslint from 8.53.0 to 8.53.1 ([#2452](https://github.com/vega/ts-json-schema-generator/pull/2452))
- **deps-dev:** Bump globals from 17.1.0 to 17.3.0 ([#2457](https://github.com/vega/ts-json-schema-generator/pull/2457))
- **deps-dev:** Bump typescript-eslint from 8.53.1 to 8.54.0 ([#2456](https://github.com/vega/ts-json-schema-generator/pull/2456))
- Clean up dependencies and switch to pnpm ([ee9b644](https://github.com/vega/ts-json-schema-generator/commit/ee9b644))
- Add & update dev tools configs ([c1eb69e](https://github.com/vega/ts-json-schema-generator/commit/c1eb69e))
- Readd vitest for tests ([23b6dbd](https://github.com/vega/ts-json-schema-generator/commit/23b6dbd))
- Use relee to publish package as @blokwise/ts-json-schema-generator ([0a15c22](https://github.com/vega/ts-json-schema-generator/commit/0a15c22))
- Regenerate lockfile ([2ed65ef](https://github.com/vega/ts-json-schema-generator/commit/2ed65ef))

### ✅ Tests

- Lint test files ([882a653](https://github.com/vega/ts-json-schema-generator/commit/882a653))
- Add missing imports from vitest ([00c9c05](https://github.com/vega/ts-json-schema-generator/commit/00c9c05))
- Use vitest to run tests ([90670e4](https://github.com/vega/ts-json-schema-generator/commit/90670e4))

### 🤖 CI

- Use npm trusted publishing ([714fa1d](https://github.com/vega/ts-json-schema-generator/commit/714fa1d))

### ❤️ Contributors

- Julian Derungs ([@aerophobic](https://github.com/aerophobic))
- Dominik Moritz <domoritz@gmail.com>
- Julian Bez <julian.bez@gmail.com>
- Arya Emami ([@aryaemami59](https://github.com/aryaemami59))

