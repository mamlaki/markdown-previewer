import { FaFreeCodeCamp, FaExpand } from 'react-icons/fa6'

export default function Editor({ markdown, setMarkdown }) {
  return (
    <div className='editor-container'>
      <div className='editor-header'>
        <div>
          <FaFreeCodeCamp />
          Editor
        </div>
        <FaExpand size={18}/>
      </div>
      <textarea 
        id='editor'
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
    </div>
  )
}