import Blockly from 'blockly'

import { useBlocklyWorkspace } from './support/useBlocklyWorkspace'
import { BLOCK_CONFIGS } from './blocks'
import { Button } from '@mui/material'
import { getWorkspaceJson } from './support/blockly'

export default function ActionStudio() {
  const workspace = useBlocklyWorkspace()

  const getXML = () => {
    const xml = Blockly.Xml.workspaceToDom(workspace.current)
    return Blockly.Xml.domToText(xml)
  }
  const onSave = () => {
    localStorage.setItem('app-data', getXML())
  }
  const onGenerate = () => {
    console.log('result', getWorkspaceJson(workspace.current))
  }

  return <div>
    <div id="blocklyDiv" style={{ height: '600px', width: '780px' }}/>
    <xml id="toolbox" style={{ display: 'none' }}>

      <category name="Base">
        {BLOCK_CONFIGS.map(e =>
          <block type={e.type}/>
        )}
      </category>
    </xml>
    <Button onClick={onSave}>Save</Button>
    <Button onClick={onGenerate}>Generate</Button>
  </div>
}
