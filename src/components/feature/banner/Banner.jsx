import React from 'react'

import Heading from '../../utilities/Heading';
import Paragraph from '../../utilities/Paragraph'
import bannerImg from '../../../assets/feature/banner-img.svg'
import Image from '../../utilities/Image';

import Button from '../../utilities/Button';

const Banner = () => {
  return (
    <section className='bg-tint-blue pt-126px pb-128px'>
        <div className="max-w-container mx-auto">
            <div className='flex justify-between items-center'>
                <div>
                    <Heading 
                        Heading='h1'
                        className='bannerHeading max-w-468px'
                        text='All the features you need'
                    />
                    <Paragraph classname='paragraph mt-6 max-w-562px' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                    <div className='flex mt-12 gap-x-4'>
                        <Button href= '/pricing' className= 'commonBtn px-12' text= 'view pricing' />
                    </div>
                </div>
                <div className='w-bannerImgWidth h-410px overflow-hidden'>
                    <Image src={bannerImg} alt='not found' className='img'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner