import { useBlocklyWorkspace } from './support/useBlocklyWorkspace'

export default function ActionStudio() {
  const workspace = useBlocklyWorkspace()

  return <div>
    <div id="blocklyDiv" style={{ height: '600px', width: '780px' }}/>

    <xml id="toolbox" style={{ display: 'none' }}>
      <category name="Base">
        <block type="text">
          <field name="TEXT"/>
        </block>
      </category>
    </xml>
  </div>
}
