import React from 'react'
import Heading from '../../utilities/Heading'
import Image from '../../utilities/Image'

import blogImg1 from '../../../assets/read-blog/blog-img1.png'
import Paragraph from '../../utilities/Paragraph'
import Span from '../../utilities/Span'

import { FaCircle } from "react-icons/fa";

const Read = () => {
  return (
    <section className='py-128px'>
        <div className="max-w-container mx-auto">
            <div className='flex flex-col items-center'>
                <Heading 
                    Heading={'h2'}
                    className= 'subHeading text-center max-w-950px'
                    text= 'A UX Case Study on Creating a Studious Environment for Students'
                />
                <div className='flex items-center justify-center gap-x-6 mt-4'>
                    <Heading 
                        Heading={'h6'}
                        className= 'text-dark-blue text-base text-center font-poppins font-medium leading-7 capitalize opacity-87'
                        text= 'Andrew Jonson'
                    />
                    <Heading 
                        Heading={'h6'}
                        className= 'text-dark-blue text-base text-center font-poppins font-medium leading-7 '
                        text= 'Posted on 27th January 2021'
                    />
                </div>
                <div className='w-full h-477px overflow-hidden mt-8'>
                    <Image src={blogImg1} alt= 'not found' className= 'img' />
                </div>
                <div className='max-w-842px'>
                    <Heading 
                        Heading={'h2'}
                        className= 'midHeading mt-12'
                        text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />
                    <p className='paragraph text-dark-blue mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <Span className= 'text-royal-blue' text= 'Excepteur sint occaecat' /> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Heading 
                        Heading={'h2'}
                        className= 'midHeading mt-40px'
                        text= 'Ut enim ad minim veniam, quis nostrud.'
                    />
                    <p className='paragraph text-dark-blue mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <Span className= 'text-royal-blue' text= 'cupidatat non' /> proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='flex flex-col gap-y-3 my-6'>
                        <div className='flex items-center gap-x-3'>
                            <FaCircle className='text-small' />
                            <Paragraph classname='paragraph text-dark-blue' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'/>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <FaCircle className='text-small' />
                            <Paragraph classname='paragraph text-dark-blue' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'/>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <FaCircle className='text-small' />
                            <Paragraph classname='paragraph text-dark-blue' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.'/>
                        </div>
                    </div>
                    <p className='paragraph text-dark-blue'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <Span className= 'text-royal-blue' text= 'exercitation ullamco' /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='w-full h-310px overflow-hidden mt-8'>
                        <Image src={blogImg1} alt= 'not found' className='img' />
                    </div>
                    <Heading 
                        Heading={'h2'}
                        className= 'midHeading mt-56px'
                        text= 'Ut enim ad minim veniam, quis nostrud.'
                    />
                    <p className='paragraph text-dark-blue mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <Span className= 'text-royal-blue' text= 'exercitation ullamco' /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Read