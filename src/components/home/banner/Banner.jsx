import React from 'react'

import Heading from '../../utilities/Heading';
import Paragraph from '../../utilities/Paragraph'
import bannerImg from '../../../assets/home/banner-img.png'
import Image from '../../utilities/Image';


import { FaArrowRightLong } from "react-icons/fa6";
import Button from '../../utilities/Button';

const Banner = () => {
  return (
    <>
        <section className='bg-tint-blue pt-126px pb-128px'>
            <div className="max-w-container mx-auto">
                <div className='flex justify-between items-center'>
                    <div>
                        <Heading 
                            Heading='h1'
                            className='bannerHeading max-w-bannerHeadingWidth'
                            text='Building stellar websites for early startups'
                        />
                        <Paragraph classname='paragraph mt-6 max-w-562px' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'/>
                        <div className='flex mt-12 gap-x-4'>
                            <Button href= '/work' className= 'commonBtn px-14' text= 'view our work' />
                            <div className='commonBtn px-14 flex items-center gap-x-4'>
                                {/* <Link to='/banner/view pricing'>view pricing</Link> */}
                                <Button href= '/pricing' text= 'view pricing' />
                                <FaArrowRightLong />
                            </div>
                        </div>
                    </div>
                    <div className='w-bannerImgWidth h-bannerImgHeight overflow-hidden'>
                        <Image src={bannerImg} alt='not found' className='img'/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner