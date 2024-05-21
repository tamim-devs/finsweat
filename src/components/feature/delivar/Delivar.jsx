import React from 'react'
import Heading from '../../utilities/Heading'
import Paragraph from '../../utilities/Paragraph'
import Image from '../../utilities/Image'

import img from '../../../assets/feature/delivar-img.png'

const Delivar = () => {
  return (
    <section className='bg-soft-yellow py-128px'>
        <div className="max-w-container mx-auto">
            <div className='flex justify-between'>
                <div className='w-575px h-398px overflow-hidden'> 
                    <Image src={img} alt= 'not found' className= 'img' />
                </div>
                <div>
                    <Heading 
                        Heading={'h5'}
                        className= 'text-black text-lg font-poppins font-medium leading-8 opacity-87 mt-41px capitalize'
                        text= 'Quick Delivery'
                    />
                    <Heading
                        Heading={'h2'}
                        className= 'midHeading text-black-velvet  max-w-624px my-4'
                        text= 'Guranteed 1 week delivery for standard five pager website'
                    />
                    <Paragraph classname= 'paragraph max-w-624px text-dark-blue opacity-60' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Delivar