import React from 'react'
import Markdown from 'markdown-to-jsx'
import { useSelector } from 'react-redux'
import './readme.scss'

const Readme = () => {
  const readme = useSelector((s) => s.data.readme)
  return <Markdown className="repo markdown-body">{readme}</Markdown>
}

export default Readme
