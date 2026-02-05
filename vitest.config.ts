import { isWindows } from 'std-env'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: [
        '**/src/**',
      ],
    },

    projects: [{
      test: {
        name: 'unit',

        include: [
          './test/**/*.test.ts',
        ],

        testTimeout: isWindows ? 60000 : 10000,

        exclude: [
          ...configDefaults.exclude,
        ],
      },
    }],
  },
})
