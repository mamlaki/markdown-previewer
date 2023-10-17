import { marked } from 'marked'

export default function Preview({ markdown }) {
  return (
    <div id='preview' dangerouslySetInnerHTML={{ __html: marked(markdown)}}>

    </div>
  )
}