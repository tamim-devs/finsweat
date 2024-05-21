import React from 'react'
import Heading from '../../utilities/Heading'
import Paragraph from '../../utilities/Paragraph'
import Image from '../../utilities/Image'

import img from '../../../assets/feature/rivision-img.png'

const Rivision = () => {
  return (
    <section className='bg-gray py-128px'>
        <div className="max-w-container mx-auto">
            <div className='flex justify-between'>
                <div className='w-575px h-398px overflow-hidden'> 
                    <Image src={img} alt= 'not found' className= 'img' />
                </div>
                <div>
                    <Heading 
                        Heading={'h5'}
                        className= 'text-black text-lg font-poppins font-medium leading-8 opacity-87 mt-41px capitalize'
                        text= 'free rivision rounds'
                    />
                    <Heading
                        Heading={'h2'}
                        className= 'midHeading text-black-velvet  max-w-624px mt-4'
                        text= 'Get free Revisions and one week of free maintenance'
                    />
                    <Paragraph classname= 'paragraph max-w-624px text-dark-blue opacity-60 mt-4' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Rivision