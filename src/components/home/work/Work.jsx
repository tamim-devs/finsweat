import React from 'react'
import Paragraph from '../../utilities/Paragraph'
import { FaArrowRightLong } from "react-icons/fa6";
import HyperLink from '../../utilities/HyperLink';


import pointer1 from '../../../assets/home/pointer-1.png'
import Pointer from '../../cards/Pointer';
import Heading from '../../utilities/Heading';

const Work = () => {
  return (
    <section className='bg-gray py-128px'>
        <div className='max-w-container mx-auto'>
            <div className='flex gap-x-142'>
                <div>
                    <Heading 
                        Heading={'h2'}
                        className= 'subHeading'
                        text= 'how we work'
                    />
                    <Paragraph classname='paragraph my-4 w-405px text-dark-blue' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' />
                    <div className='getLink flex items-center gap-x-4'>
                        {/* <Link to= '/work/get work'>Get in touch with us</Link> */}
                        <HyperLink href='#' text='Get in touch with us' />
                        <FaArrowRightLong />
                    </div>
                </div>
                <div className='flex flex-wrap gap-x-6 gap-y-12'>
                    <Pointer
                        src={pointer1} alt='not found'
                        headingText='Strategy'
                        peraText='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
                    />
                    <Pointer
                        src={pointer1} alt='not found'
                        headingText='Wireframing'
                        peraText='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
                    />
                    <Pointer
                        src={pointer1} alt='not found'
                        headingText='Design'
                        peraText='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
                    />
                    <Pointer
                        src={pointer1} alt='not found'
                        headingText='Development'
                        peraText='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work