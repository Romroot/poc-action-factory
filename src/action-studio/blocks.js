import * as items from './config/actionDefinition'
import { initBlock } from './support/init'

export const BLOCK_CONFIGS = Object.values(items)

export const initBlocks = () => {
  BLOCK_CONFIGS.map(e => initBlock(e))
}

