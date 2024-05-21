import React from 'react'
import Heading from '../../utilities/Heading'
import Paragraph from '../../utilities/Paragraph'
import Image from '../../utilities/Image'

import portfolioImg from '../../../assets/portfolio/portfolio-img1.png'
import HyperLink from '../../utilities/HyperLink'

const Create = () => {
  return (
    <section className='pt-96px'>
        <div className="max-w-container mx-auto">
          <div className='w-1063px mx-auto'>
              <Heading 
                  Heading={'h6'}
                  className= 'paragraph text-dark-blue font-medium'
                  text= 'Web design and development'
              />
              <Heading 
                  Heading={'h2'}
                  className= 'subHeading max-w-646px mt-3 '
                  text= 'Finsweet Design case studies'
              />
              <Paragraph classname='paragraph max-w-817px text-dark-blue font-medium mt-4' text= 'We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.' />
              <div className='w-full h-641px overflow-hidden mt-12'>
                  <Image src={portfolioImg} alt='img' className='img' />
              </div>
              <div className='flex justify-between mt-12 relative after:absolute after:content after:h-1px after:w-full after:bg-dark-blue after:left-0 after:-bottom-8 after:opacity-30'>
                  <div>
                      <Heading 
                          Heading={'h6'}
                          className= 'paragraph text-dark-blue font-medium opacity-80'
                          text= 'client'
                      />
                      <HyperLink href='#' className='cardHeading text-dark-blue' text= 'facebook.com' />
                  </div>
                  <div>
                      <Heading 
                          Heading={'h6'}
                          className= 'paragraph text-dark-blue font-medium opacity-80'
                          text= 'service'
                      />
                      <HyperLink href='#' className='cardHeading text-dark-blue' text= 'Product Design' />
                  </div>
                    <div>
                        <Heading 
                            Heading={'h6'}
                            className= 'paragraph text-dark-blue font-medium opacity-80'
                            text= 'delivarable'
                        />
                        <HyperLink href='#' className='cardHeading text-dark-blue' text= 'UI Screens, UX Flow & Prototype' />
                    </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Create