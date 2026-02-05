import type { CompletedConfig } from '../../src/Config'
import assert from 'node:assert'
import fs from 'node:fs'
import path from 'node:path'
import stringify from 'safe-stable-stringify'
import { process } from 'std-env'
import { it } from 'vitest'
import { DEFAULT_CONFIG } from '../../src/Config'
import { createGenerator } from '../../src/factory/generator'

it('vega-lite - schema', async () => {
  const config: CompletedConfig = {
    ...DEFAULT_CONFIG,
    path: `node_modules/vega-lite/src/index.ts`,
    type: 'TopLevelSpec',
    encodeRefs: false,
    skipTypeCheck: true,
  }

  const generator = createGenerator(config)
  const schema = generator.createSchema(config.type)
  const schemaFile = path.resolve('test', 'vega-lite', 'schema.json')

  if (process.env.UPDATE_SCHEMA) {
    await fs.promises.writeFile(schemaFile, `${stringify(schema, null, 2)}\n`, 'utf8')
  }

  const vegaLiteSchema = JSON.parse(await fs.promises.readFile(schemaFile, 'utf8'))

  assert.deepStrictEqual(schema, vegaLiteSchema)
})
