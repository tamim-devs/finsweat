import React from 'react'
import Paragraph from '../utilities/Paragraph';
import Span from '../utilities/Span';
import Heading from '../utilities/Heading';


const CardClient = ({icon, headingText, peraText}) => {
  return (
    <>
        <div className='w-405px pt-58px pl-12 pb-12 pr-8'>
            <Span className='icon' text={icon} />
            <Heading 
              Heading={'h5'}
              className= 'cardHeading text-dark-blue font-normal mt-22px'
              text= {headingText}
            />
            <Paragraph classname='paragraph text-dark-blue mt-3' text={peraText} />
        </div>
    </>
  )
}

export default CardClient