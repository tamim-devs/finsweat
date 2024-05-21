import React from 'react'
import Image from '../utilities/Image'
import Heading from '../utilities/Heading'
import Paragraph from '../utilities/Paragraph'
import HyperLink from '../utilities/HyperLink'

import { LuMoveRight } from "react-icons/lu";


const PortfolioCard = ({src, headingtxt, peratxt, lasttxt, path}) => {
  return (
    <div className='w-623px'>
        <div className='w-full h-380px overflow-hidden'>
            <Image src={src} alt= 'not found' className= 'img' />
        </div>
        <Heading 
            Heading={'h3'}
            className= 'midHeading mt-6'
            text= {headingtxt}
        />
        <Paragraph classname='paragraph text-dark-blue mt-3' text= {peratxt} />
        <div className='flex items-center gap-x-4 mt-6'>
            <HyperLink href= '/work/read-case-study' className= 'text-dark-blue text-base font-poppins font-medium leading-6' text= {lasttxt} />
            <LuMoveRight />
        </div>
    </div>
  )
}

export default PortfolioCard