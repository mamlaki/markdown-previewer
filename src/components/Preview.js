import { marked } from 'marked'

export default function Preview({ markdown }) {
  return (
    <div className='preview-container'>
      <div className='preview-header'>Previewer</div>
      <div id='preview' dangerouslySetInnerHTML={{ __html: marked(markdown)}}></div>
    </div>
  )
}