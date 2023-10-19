export default function Editor({ markdown, setMarkdown }) {
  return (
    <div className='editor-container'>
      <div className='editor-header'>Editor</div>
      <textarea 
        id='editor'
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
    </div>
  )
}