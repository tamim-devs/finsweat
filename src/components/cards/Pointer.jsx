import React from 'react'
import Paragraph from '../utilities/Paragraph'
import Heading from '../utilities/Heading'


const Pointer = ({src, alt, headingText, peraText}) => {
  return (
    <>
        <div>
            <picture>
                <img src={src} alt={alt} />
            </picture>
            <Heading 
              Heading={'h5'}
              className= 'miniHeading mt-4'
              text={headingText}
            />
            <Paragraph classname='paragraph text-dark-blue max-w-303px mt-2' text={peraText}/>
        </div>
    </>
  )
}

export default Pointer