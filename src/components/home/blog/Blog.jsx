import React from 'react'

import Heading from '../../utilities/Heading'
import Image from '../../utilities/Image'
import Span from '../../utilities/Span'
import Paragraph from '../../utilities/Paragraph'
import HyperLink from '../../utilities/HyperLink'

import img1 from '../../../assets/home/blog-img1.png'
import img2 from '../../../assets/home/blog-img2.png'
import img3 from '../../../assets/home/blog-img3.png'

import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {

    let heading = 'How one Webflow user grew his single person consultancy from $0-100K in 14 months'
    let peragraph = 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'

  return (
    <section className='bg-white py-128px'>
        <div className="max-w-container mx-auto">
            <Heading 
                Heading='h2'
                className='subHeading'
                text='our blog'
            />
            <div className='flex mt-16 gap-x-8 flex-wrap'>
                <div className='w-405px'>
                    <div className='w-405px h-285px overflow-hidden mb-10'>
                        <Image src={img1} alt='not found' className='w-full h-full object-cover' />
                    </div>
                    <Span className='paragraph font-medium text-dark-blue' text='19 Jan 2022' />
                    <Heading 
                        Heading='h6'
                        className='cardHeading text-dark-blue normal-case mt-4'
                        text= {heading}
                    />
                    <Paragraph classname='paragraph text-dark-blue mt-4' text={peragraph} />
                    <div className='paragraph text-dark-blue font-medium opacity-100 flex items-center gap-x-4 mt-8'>
                        <HyperLink href={'#'} text='read more' />
                        <FaArrowRightLong />
                    </div>
                </div>
                <div className='w-405px'>
                    <div className='w-405px h-285px overflow-hidden mb-10'>
                        <Image src={img2} alt='not found' className='w-full h-full object-cover' />
                    </div>
                    <Span className='paragraph font-medium text-dark-blue' text='19 Jan 2022' />
                    <Heading 
                        Heading='h6'
                        className='cardHeading text-dark-blue normal-case mt-4'
                        text= {heading}
                    />
                    <Paragraph classname='paragraph text-dark-blue mt-4' text={peragraph} />
                    <div className='paragraph text-dark-blue font-medium opacity-100 flex items-center gap-x-4 mt-8'>
                        <HyperLink href='#' text='read more' />
                        <FaArrowRightLong />
                    </div>
                </div>
                <div className='w-405px'>
                    <div className='w-405px h-285px overflow-hidden mb-10'>
                        <Image src={img3} alt='not foound' className='w-full h-full object-cover' />
                    </div>
                    <Span className='paragraph font-medium text-dark-blue' text='19 Jan 2022' />
                    <Heading 
                        Heading='h6'
                        className='cardHeading text-dark-blue normal-case mt-4'
                        text= {heading}
                    />
                    <Paragraph classname='paragraph text-dark-blue mt-4' text={peragraph} />
                    <div className='paragraph text-dark-blue font-medium opacity-100 flex items-center gap-x-4 mt-8'>
                        <HyperLink href='#' text='read more' />
                        <FaArrowRightLong />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog