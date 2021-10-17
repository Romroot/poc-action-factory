import { useBlocklyWorkspace } from './support/useBlocklyWorkspace'
import { BLOCK_CONFIGS } from './blocks'

export default function ActionStudio() {
  const workspace = useBlocklyWorkspace()


  return <div>
    <div id="blocklyDiv" style={{ height: '600px', width: '780px' }}/>
    <xml id="toolbox" style={{ display: 'none' }}>

      <category name="Base">
        {BLOCK_CONFIGS.map(e =>
          <block type={e.type}/>
        )}
      </category>
    </xml>
  </div>
}
