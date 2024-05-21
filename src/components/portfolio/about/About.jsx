import React from 'react'
import Heading from '../../utilities/Heading'
import Paragraph from '../../utilities/Paragraph'
import { FaCircle } from "react-icons/fa";
import Image from '../../utilities/Image';

import portfolioaboutImg from '../../../assets/portfolio/portfolio-aboutImg.png'

const About = () => {
  return (
    <section className='py-96px'>
        <div className="max-w-container mx-auto">
            <div className='w-843px mx-auto'>
                <Heading 
                    Heading={'h3'}
                    className= 'midHeading'
                    text= 'About the project'
                />
                <Paragraph classname='paragraph max-w-842px text-dark-blue  mt-3' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
                <div className='flex flex-col gap-y-3 my-6'>
                    <div className='flex items-center gap-x-3'>
                        <FaCircle className='text-small' />
                        <Paragraph classname='paragraph text-dark-blue' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <FaCircle className='text-small' />
                        <Paragraph classname='paragraph text-dark-blue' text= 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'/>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <FaCircle className='text-small' />
                        <Paragraph classname='paragraph text-dark-blue' text= 'Duis aute irure dolor in reprehenderit in voluptate velit esse'/>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <FaCircle className='text-small' />
                        <Paragraph classname='paragraph text-dark-blue' text= 'Excepteur sint occaecat cupidatat non proident, sunt in culpa'/>
                    </div>
                </div>
                <div className='w-full h-508px overflow-hidden mt-16'>
                    <Image src={portfolioaboutImg } alt= 'img' className='img' />
                </div>
                <Heading 
                    Heading={'h3'}
                    className= 'midHeading font-semibold mt-16'
                    text= 'How we do it'
                />
                <Paragraph classname= 'paragraph text-dark-blue ' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
                <div className='flex flex-col gap-y-3 my-6'>
                    <div className='flex items-center gap-x-3'>
                        <FaCircle className='text-small' />
                        <Paragraph classname='paragraph text-dark-blue' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <FaCircle className='text-small' />
                        <Paragraph classname='paragraph text-dark-blue' text= 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'/>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <FaCircle className='text-small' />
                        <Paragraph classname='paragraph text-dark-blue' text= 'Duis aute irure dolor in reprehenderit in voluptate velit esse'/>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <FaCircle className='text-small' />
                        <Paragraph classname='paragraph text-dark-blue' text= 'Excepteur sint occaecat cupidatat non proident, sunt in culpa'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About