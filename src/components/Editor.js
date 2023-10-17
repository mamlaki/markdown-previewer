export default function Editor({ markdown, setMarkdown }) {
  return (
    <div className='editor-container'>
      <textarea 
        id='editor'
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
    </div>
  )
}