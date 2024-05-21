import React from 'react'
import Heading from '../../utilities/Heading'
import Paragraph from '../../utilities/Paragraph'
import Image from '../../utilities/Image'

import img from '../../../assets/feature/sapport-img.png'

const Sapport = () => {
  return (
    <section className='py-128px'>
        <div className="max-w-container mx-auto">
            <div className='flex justify-between'>
                <div>
                    <Heading 
                        Heading={'h5'}
                        className= 'text-black text-lg font-poppins font-medium leading-8 opacity-87 mt-41px'
                        text= '24/7 Support'
                    />
                    <Heading
                        Heading={'h2'}
                        className= 'midHeading text-black-velvet  max-w-624px my-4'
                        text= 'Working with us, you will be getting 24/7 priority support'
                    />
                    <Paragraph classname= 'paragraph max-w-624px text-dark-blue opacity-60' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'/>
                </div>
                <div className='w-575px h-398px overflow-hidden'> 
                    <Image src={img} alt= 'not found' className= 'img' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sapport