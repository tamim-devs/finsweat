import React from 'react'

const Input = ({type, placeholder, className, name, value}) => {
  return (
    <>
        <input type={type} placeholder={placeholder} className={className} name={name} value={value} />
    </>
  )
}

export default Input