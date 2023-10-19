import { useState, useEffect } from 'react'
import { FaFreeCodeCamp, FaExpand, FaDownLeftAndUpRightToCenter } from 'react-icons/fa6'

export default function Editor({ markdown, setMarkdown, setExpandedComponent, isExpanded, anotherIsExpanded, customHeight, setCustomHeight }) {
  useEffect(() => {
    if (!isExpanded) {
      const currentHeight  = document.getElementById('editor').style.height
      if (currentHeight !== 'auto' && currentHeight !== '90vh') {
        setCustomHeight(currentHeight)
      }
    }
  }, [isExpanded, anotherIsExpanded])

  const toggleExpand = () => {
    const currentHeight = document.getElementById('editor').style.height
    if (currentHeight !== 'auto' && currentHeight !== '90vh') {
      setCustomHeight(currentHeight)
    }
    setExpandedComponent(isExpanded ? '' : 'Editor')
  }

  return (
    <div className='editor-container'>
      <div className='editor-header'>
        <div>
          <FaFreeCodeCamp />
          Editor
        </div>
        <div onClick={toggleExpand}>
          {isExpanded ? <FaDownLeftAndUpRightToCenter size={18} /> : <FaExpand size={18} />}
        </div>
      </div>
      <textarea 
        id='editor'
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{ height: isExpanded ? '90vh' : customHeight || 'auto' }}
      />
    </div>
  )
}