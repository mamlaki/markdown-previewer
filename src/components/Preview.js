import { marked } from 'marked'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-cshtml'
import 'prismjs/components/prism-swift'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-python'

import { FaFreeCodeCamp, FaExpand, FaDownLeftAndUpRightToCenter } from 'react-icons/fa6'

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer()

renderer.code = (code, language) => {
  const validLanguage = Prism.languages[language] ? language : 'javascript'
  const highlighted = Prism.highlight(code, Prism.languages[validLanguage], validLanguage)
  return `<pre class="language-${validLanguage}"><code class="language-${validLanguage}">${highlighted}</code></pre>`
}

marked.use({ renderer })

export default function Preview({ markdown, setExpandedComponent, isExpanded, setCustomHeight }) {
  const toggleExpand = () => {
    const currentHeight = document.getElementById('editor')?.style.height
    if (currentHeight && currentHeight !== 'auto' && currentHeight !== '90vh') {
      setCustomHeight(currentHeight)
    }
    setExpandedComponent(isExpanded ? '' : 'Preview')
  }

  return (
    <div className='preview-container' style={{ height: isExpanded ? '100%' : 'auto'}}>
      <div className='preview-header'>
        <div>
          <FaFreeCodeCamp />
          Previewer
        </div>
        <div onClick={toggleExpand}>
          {isExpanded ? <FaDownLeftAndUpRightToCenter size={18} /> : <FaExpand size={18} /> }
        </div>
      </div>
      <div id='preview' dangerouslySetInnerHTML={{ __html: marked(markdown)}}></div>
    </div>
  )
}