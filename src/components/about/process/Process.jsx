import React from 'react'
import Image from '../../utilities/Image';
import Paragraph from '../../utilities/Paragraph';

import line from '../../../assets/about/line.png'
import { FaCircle } from "react-icons/fa";
import Heading from '../../utilities/Heading';

const Process = () => {
  return (
    <section className='bg-white py-128px'>
        <div className="max-w-container mx-auto">
            <Heading 
                Heading={'h2'}
                className= 'subHeading text-center'
                text= 'The process we follow'
            />
            <div className='flex gap-x-8 mt-12'>
                <div className='w-296px'>
                    <div className='flex items-center gap-x-6'>
                        <FaCircle className='text-royal-blue text-2xl' />
                        <div className='w-224px h-2px'>
                            <Image src={line} className='w-full h-full' />
                        </div>
                    </div>
                    <Heading 
                        Heading={'h5'}
                        className= 'cardHeading text-dark-blue font-medium mt-8'
                        text= 'planning'
                    />
                    <Paragraph classname='paragraph text-dark-blue mt-2' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.' />
                </div>
                <div className='w-296px'>
                    <div className='flex items-center gap-x-6'>
                        <FaCircle className='text-royal-blue text-2xl' />
                        <div className='w-224px h-2px'>
                            <Image src={line} className='w-full h-full' />
                        </div>
                    </div>
                    <Heading 
                        Heading={'h5'}
                        className= 'cardHeading text-dark-blue font-medium mt-8'
                        text= 'conception'
                    />
                    <Paragraph classname='paragraph text-dark-blue mt-2' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.' />
                </div>
                <div className='w-296px'>
                    <div className='flex items-center gap-x-6'>
                        <FaCircle className='text-royal-blue text-2xl' />
                        <div className='w-224px h-2px'>
                            <Image src={line} className='w-full h-full' />
                        </div>
                    </div>
                    <Heading 
                        Heading={'h5'}
                        className= 'cardHeading text-dark-blue font-medium mt-8'
                        text= 'design'
                    />
                    <Paragraph classname='paragraph text-dark-blue mt-2' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.' />
                </div>
                <div className='w-296px'>
                    <div className='flex items-center gap-x-6'>
                        <FaCircle className='text-royal-blue text-2xl' />
                        <div className='w-224px h-2px'>
                            <Image src={line} className='w-full h-full' />
                        </div>
                    </div>
                    <Heading 
                        Heading={'h5'}
                        className= 'cardHeading text-dark-blue font-medium mt-8'
                        text= 'development'
                    />
                    <Paragraph classname='paragraph text-dark-blue mt-2' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Process