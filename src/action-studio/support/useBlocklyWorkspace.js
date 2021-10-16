import { useEffect, useRef } from 'react'
import Blockly from 'blockly'

export const useBlocklyWorkspace = () => {
  const workspaceRef = useRef()

  useEffect(() => {
    workspaceRef.current = Blockly.inject('blocklyDiv', {
      toolbox: document.getElementById('toolbox')
    })
    return () => workspaceRef.current.dispose()
  }, [])

  return workspaceRef
}
