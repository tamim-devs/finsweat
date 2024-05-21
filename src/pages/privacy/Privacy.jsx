import React from 'react'
import Heading from '../../components/utilities/Heading'
import Paragraph from '../../components/utilities/Paragraph'
import Span from '../../components/utilities/Span'
import { FaCircle } from 'react-icons/fa6'

const Privacy = () => {
  return (
    <section className='py-128px'>
        <div className="max-w-842px mx-auto">
            <Heading 
                Heading={'h2'}
                className= 'subHeading text-center'
                text= 'Privacy Policy'
            />
            <Paragraph classname= 'paragraph text-dark-blue max-w-562px mx-auto mt-4 text-center' text= 'When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your ' />
            <Heading 
                Heading={'h3'}
                className= 'midHeading mt-16'
                text= 'Lorem ipsum dolor.'
            />
            <p className='paragraph text-dark-blue mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <Span className= 'paragraph text-royal-blue' text= 'Excepteur sint occaecat' /> cupidatat non proident.</p>
            <Paragraph classname='paragraph text-dark-blue mt-6' text= 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
            <Heading 
                Heading={'h3'}
                className= 'midHeading mt-10'
                text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            />
            <p className='paragraph text-dark-blue mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <Span className= 'paragraph text-royal-blue' text= 'cupidatat' /> non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
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
            <Paragraph classname= 'paragraph text-dark-blue mt-4' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.' />
        </div>
    </section>
  )
}

export default Privacy