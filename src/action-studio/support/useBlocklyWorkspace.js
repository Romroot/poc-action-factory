import { useEffect, useRef } from 'react'
import Blockly from 'blockly'
import { initBlocks } from '../blocks'

export const useBlocklyWorkspace = () => {
  const workspaceRef = useRef()

  useEffect(() => {
    workspaceRef.current = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox')
    })
    initBlocks()

    try {
      const blocklySchema = localStorage.getItem('app-data')
      if (blocklySchema) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(blocklySchema), workspaceRef.current)
      }
    } catch (e) {
      console.error('Failed to insert default value')
    }
    return () => workspaceRef.current.dispose()
  }, [])

  return workspaceRef
}
