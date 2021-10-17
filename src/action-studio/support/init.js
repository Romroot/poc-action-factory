import Blockly from 'blockly'

export const initBlock = ({ type, convertToJSON, config }) => {
  Blockly.Blocks[type] = {
    init() {
      console.log(config)
      this.jsonInit(config)
    },
    convertToJSON() {
      return convertToJSON ? convertToJSON(this) : {}
    },
  }
}
