import React from 'react'

import Heading from '../../utilities/Heading'
import Paragraph from '../../utilities/Paragraph'
import Input from '../../utilities/Input'
import HyperLink from '../../utilities/HyperLink'

import { FaArrowRightLong } from "react-icons/fa6";

const Build = () => {

    let peraText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'

    let peraText2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'

  return (
    <section id='build'> 
        <div className="max-w-container mx-auto">
            <div className='flex'>
                <div className='bg-buildImg w-656px relative'>
                    <div className='bg-overlay w-full h-full absolute top-0 left-0'></div>
                    <div className='px-96px pt-96px pb-261px relative z-1'>
                        <Heading 
                            Heading='h1'
                            className='bannerHeading w-464px'
                            text= 'Building stellar websites for early startups'
                        />
                        <Paragraph classname='paragraph text-gray mt-6' text={peraText} />
                    </div>
                </div>
                <div className='bg-tint-blue w-624px'>
                    <div className='pt-96px px-96px'>
                        <Heading 
                            Heading='h5'
                            className='miniHeading text-white normal-case'
                            text= 'send inquiry'
                        />
                        <Paragraph classname='paragraph mt-4' text={peraText2} />
                        <form action='' method=''>
                            <div className='mt-10 flex flex-col gap-y-4'>
                                <Input type='text' placeholder='your name' className='input' />
                                <Input type='email' placeholder='email' className='input' />
                                <Input type='url' placeholder='Paste your Figma design URL' className='input' />
                            </div>
                        </form>
                        <HyperLink href='#' className='buildBtn' text='Send an Inquiry' />
                        <div className='getLink text-white justify-center mt-7'>
                            <HyperLink href='#' text='Get in touch with us' />
                            <FaArrowRightLong />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Build