import type { Config } from '../Config'
import { DEFAULT_CONFIG } from '../Config'
import { SchemaGenerator } from '../SchemaGenerator'
import { createFormatter } from './formatter'
import { createParser } from './parser'
import { createProgram } from './program'

export function createGenerator(config: Config): SchemaGenerator {
  const completedConfig = { ...DEFAULT_CONFIG, ...config }
  const program = config.tsProgram || createProgram(completedConfig)
  const parser = createParser(program, completedConfig)
  const formatter = createFormatter(completedConfig)

  return new SchemaGenerator(program, parser, formatter, completedConfig)
}
