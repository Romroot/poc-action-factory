import * as items from './config/actionDefinition'
import { initBlock } from './support/blockly'

export const BLOCK_CONFIGS = Object.values(items)

export const initBlocks = () => {
  BLOCK_CONFIGS.map(e => initBlock(e))
}

