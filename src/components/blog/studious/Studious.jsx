import React from 'react'
import Heading from '../../utilities/Heading'
import Image from '../../utilities/Image'

import studiousImg from '../../../assets/blog/studious-img.png'
import Paragraph from '../../utilities/Paragraph'
import HyperLink from '../../utilities/HyperLink'

const Studious = () => {

    let peratxt = 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.'

  return (
    <section className='py-128px'>
        <div className="max-w-container mx-auto">
            <Heading
                Heading={'h2'}
                className= 'subHeading max-w-950px text-center mx-auto'
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
                <Image src={studiousImg} alt= 'not found' className= 'img' />
            </div>
            <Paragraph classname= 'paragraph max-w-831px text-dark-blue text-center mx-auto mt-12' text={peratxt} />
            <div className='mt-4 text-center'>
                <HyperLink href= '#' className='paragraph text-royal-blue' text='Read more' />
            </div>
        </div>
    </section>
  )
}

export default Studious