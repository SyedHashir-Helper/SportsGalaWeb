import React from 'react'
import {Row,Col} from 'antd'
import "../../styles/Highlight.css"

const Highlight = ({title, desc}) => {
  return (
    <div className='main-highlight'>
        <h1 className='highlight-text'>
            {title}
        </h1>
        <p className='highlight-desc'>{desc}</p>
    </div>
  )
}

export default Highlight
