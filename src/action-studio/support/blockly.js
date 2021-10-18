import Blockly from 'blockly'

export const initBlock = ({ type, convertToJSON, config }) => {
  Blockly.Blocks[type] = {
    init() {
      this.jsonInit(config)
    },
    convertToJSON() {
      return convertToJSON ? convertToJSON(this) : {}
    },
  }
}

export const getRootBlock = (workspace) => {
  const blocks = workspace.getTopBlocks(false)
  return blocks.find(block => block.type)
}

export const getWorkspaceJson = (workspace) => {
  return getRootBlock(workspace).convertToJSON()
}
