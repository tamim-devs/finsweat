import React from 'react'
import HyperLink from './HyperLink'
import { Link } from 'react-router-dom'

const Button = ({href, className, text}) => {
  return (
    <>
        <Link to={href} className={className}>{text}</Link>
        {/* <HyperLink href={href} className={className} text={text} /> */}
    </>
  )
}

export default Button