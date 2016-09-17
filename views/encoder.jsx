import React from 'react'
import { Link, browserHistory } from 'react-router'
import CodeMirrorElement from '../components/code_mirror.jsx'
import TextAreaElement from '../components/text_area.jsx'

export default function Encoder({ children }) {
  return (
    <div className="row">
      <div className="col-md-6">
        <h2 className='title'>Encoded</h2>
        <TextAreaElement></TextAreaElement>
      </div>
      <div className="col-md-6">
        <h2 className='title'>Decoded</h2>
        <CodeMirrorElement value="<xml></xml>"></CodeMirrorElement>          
      </div>
    </div>
  )
}