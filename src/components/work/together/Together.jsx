import React from 'react'
import Heading from '../../utilities/Heading'
import Paragraph from '../../utilities/Paragraph'
import Button from '../../utilities/Button'

const Together = () => {
  return (
    <section className='py-128px'>
        <div className="max-w-container mx-auto">
            <Heading 
                Heading={'h2'}
                className='subHeading max-w-730px mx-auto text-center'
                text= "Let's build something great together"
            />
            <Paragraph classname='paragraph text-dark-blue text-center max-w-562px mx-auto mt-5' text= 'Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.' />
            <div className='flex justify-center mt-10'>
                <Button href='#' className='text-black text-lg font-manrope font-semibold leading-8 capitalize py-4 px-66px rounded-half bg-yellow border border-transparent hover:border-black hover:bg-transparent' text= 'contact Us' />
            </div>
        </div>
    </section>
  )
}

export default Together