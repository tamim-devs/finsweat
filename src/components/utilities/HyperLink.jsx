import React from 'react'
import { Link } from 'react-router-dom'

const HyperLink = ({href, text, className,}) => {
  return (
    <>
        <Link to={href} className={className}>{text}</Link>
        {/* <a href={href} className={className}>{text}</a> */}
    </>
  )
}

export default HyperLink