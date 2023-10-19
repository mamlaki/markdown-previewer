import { useState } from 'react'
import { FaGithub } from 'react-icons/fa6'
import Editor from './components/Editor'
import Preview from './components/Preview'
import './App.css'

export default function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!
  
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also amke text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `)
  const [expandedComponent, setExpandedComponent] = useState('')
  const [customHeight, setCustomHeight] = useState(null)

  return (
    <div className='wrapper'>
      {expandedComponent !== 'Preview' && (
        <Editor 
          markdown={markdown} 
          setMarkdown={setMarkdown} 
          setExpandedComponent={setExpandedComponent}
          isExpanded={expandedComponent === 'Editor'}
          anotherIsExpanded={expandedComponent === 'Preview'}
          customHeight={customHeight}
          setCustomHeight={setCustomHeight}
        />
      )}
      {expandedComponent !== 'Editor' && (
        <Preview 
          markdown={markdown} 
          setExpandedComponent={setExpandedComponent}
          isExpanded={expandedComponent === 'Preview'}
          customHeight={customHeight}
          setCustomHeight={setCustomHeight}
        />
      )}
      <footer>
        &copy; 2023 Melek Redwan
        <a href='https://github.com/mamlaki/markdown-previewer' target='_blank' rel='noopener noreferrer'><FaGithub size={22} /></a>
      </footer>
    </div>
  )
}