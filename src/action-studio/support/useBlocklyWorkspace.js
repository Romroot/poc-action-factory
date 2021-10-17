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
    return () => workspaceRef.current.dispose()
  }, [])

  return workspaceRef
}
