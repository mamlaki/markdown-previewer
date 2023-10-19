import { marked } from 'marked'
import { FaFreeCodeCamp } from 'react-icons/fa6'

export default function Preview({ markdown }) {
  return (
    <div className='preview-container'>
      <div className='preview-header'>
        <FaFreeCodeCamp />
        Previewer
      </div>
      <div id='preview' dangerouslySetInnerHTML={{ __html: marked(markdown)}}></div>
    </div>
  )
}