import React from 'react'
import './style.css'

const sizes = ['col', 'sm-col', 'md-col', 'lg-col']

const Col = ({ col, sm, md, lg, gutter, pullRight, mb, className = '', ...props }) => {
  let hasSizes = false
  const sizeClass = [col, sm, md, lg].map((size, i) => {
    const name = sizes[i]
    if (size) hasSizes = true
    return size ? `${name} ${name}-${size} ` : ''
  }).join('')
  const gutterClass = gutter ? `px${gutter} ` : ''
  const pullRightClass = pullRight ? 'col-right ' : ''
  const colClass = hasSizes ? '' : 'col '
  const mbClass = mb ? `mb${mb} ` : ''
  const modClassName = `${mbClass}${colClass}${sizeClass}${gutterClass}${pullRightClass}${className}`
  return (<div className={modClassName} {...props} />)
}

export default Col
