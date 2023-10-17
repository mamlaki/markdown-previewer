import './App.css'

export default function App() {
  return (
    <div className='App'>
      <div className='editor-container'>
        <textarea 
          id='editor'
        />
      </div>
      <div className='preview-container' id='preview'>

      </div>
    </div>
  )
}