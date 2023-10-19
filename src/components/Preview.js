import { marked } from 'marked'
import { FaFreeCodeCamp, FaExpand } from 'react-icons/fa6'

export default function Preview({ markdown }) {
  return (
    <div className='preview-container'>
      <div className='preview-header'>
        <div>
          <FaFreeCodeCamp />
          Previewer
        </div>
        <FaExpand size={18}/>
      </div>
      <div id='preview' dangerouslySetInnerHTML={{ __html: marked(markdown)}}></div>
    </div>
  )
}