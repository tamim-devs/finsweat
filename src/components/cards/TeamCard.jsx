import React from 'react'

import Image from '../utilities/Image'
import Heading from '../utilities/Heading'
import HyperLink from '../utilities/HyperLink'
import Paragraph from '../utilities/Paragraph'

const TeamCard = ({src, icon1, icon2, icon3, headingText, subText}) => {
  return (
    <>
        <div className='w-296px bg-white px-44px pt-12 pb-8'>    
            <div className='w-168px h-168px overflow-hidden rounded-full mx-auto relative [&>div]:hover:opacity-100'>
                <Image src={src} alt='not found' className= 'w-full h-full object-cover' />
                <div className='absolute left-0 bottom-0 bg-teamGradient h-full w-full opacity-0 transition-all duration-500'>
                    <div className='absolute left-14 bottom-7 text-white flex gap-x-3'>
                        <HyperLink href= '#' text={icon1} />
                        <HyperLink href= '#' text={icon2} />
                        <HyperLink href= '#' text={icon3} />
                    </div>
                </div>
            </div>
            <Heading 
                Heading={'h3'}
                className= 'cardHeading text-dark-blue text-center mt-30px'
                text= {headingText}
            />
            <Paragraph classname= 'paragraph text-dark-blue text-center' text= {subText} />
        </div>
    </>
  )
}

export default TeamCard