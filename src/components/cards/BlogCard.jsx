import React from 'react'
import Image from '../utilities/Image'
import Span from '../utilities/Span'
import Heading from '../utilities/Heading'
import Paragraph from '../utilities/Paragraph'
import { Link } from 'react-router-dom'

import { LuMoveRight } from "react-icons/lu";

const BlogCard = ({src, subHeadingtxt,headingTxt, peratxt,}) => {
  return (
    <div className='w-405px'>
        <div className='w-405px h-285px overflow-hidden'>
            <Image src={src} alt= 'not found' className= 'img' />
        </div>
        <div className='mt-8'>
            <Span className='paragraph text-dark-blue font-medium' text={subHeadingtxt} />
        </div>
        <Heading 
            Heading={'h5'}
            className= 'cardHeading text-dark-blue font-normal normal-case my-4'
            text={headingTxt}  
        />
        <Paragraph classname= 'paragraph text-dark-blue mb-6' text={peratxt} />
        <Link to='/blog/read blog' className='paragraph text-dark-blue opacity-100 font-medium capitalize flex gap-x-3 items-center'>read more<LuMoveRight/></Link>
    </div>
  )
}

export default BlogCard