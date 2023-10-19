import { marked } from 'marked'
import { FaFreeCodeCamp, FaExpand } from 'react-icons/fa6'

export default function Preview({ markdown, setExpandedComponent, isExpanded, setCustomHeight }) {
  const toggleExpand = () => {
    const currentHeight = document.getElementById('editor')?.style.height
    if (currentHeight && currentHeight !== 'auto' && currentHeight !== '90vh') {
      setCustomHeight(currentHeight)
    }
    setExpandedComponent(isExpanded ? '' : 'Preview')
  }

  return (
    <div className='preview-container' style={{ height: isExpanded ? '90vh' : 'auto'}}>
      <div className='preview-header'>
        <div>
          <FaFreeCodeCamp />
          Previewer
        </div>
        <div onClick={toggleExpand}>
          {isExpanded ? 'Minimize' : <FaExpand size={18} /> }
        </div>
      </div>
      <div id='preview' dangerouslySetInnerHTML={{ __html: marked(markdown)}}></div>
    </div>
  )
}