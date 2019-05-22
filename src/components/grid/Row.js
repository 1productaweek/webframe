import React from 'react'
import './style.css'

const Row = ({ gutter, className = '', ...props }) => {
  const gutterClassName = gutter ? `mxn${gutter}` : ''
  return <div className={`clearfix ${gutterClassName} ${className}`} {...props} />
}

export default Row
