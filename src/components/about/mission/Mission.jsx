import React from 'react'

import Paragraph from '../../utilities/Paragraph'
import Image from '../../utilities/Image'

import img1 from '../../../assets/about/mission-img1.png'
import img2 from '../../../assets/about/mission-img2.png'
import Heading from '../../utilities/Heading'

const Mission = () => {

    let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
    <section className='bg-accent py-128px'>
        <div className="max-w-container mx-auto">
            <div className='flex gap-x-140'>
                <div>
                    <Heading 
                        Heading={'h6'}
                        className= 'aboutMiniHeading mt-54px'
                        text= 'our mission'
                    />
                    <Heading 
                        Heading={'h3'}
                        className= 'midHeading my-4 capitalize'
                        text= 'Inspire, Innovate, Share'
                    />
                    <Paragraph classname='paragraph text-dark-blue w-623px' text={text} />
                </div>
                <div>
                    <Image src={img1} />
                </div>
            </div>
            <div className='flex gap-x-140 mt-96px'>
                <div>
                    <Image src={img2} />
                </div>
                <div>
                    <Heading 
                        Heading={'h6'}
                        className= 'aboutMiniHeading mt-54px'
                        text= 'our vision'
                    />
                    <Heading 
                        Heading={'h3'}
                        className= 'midHeading my-4 capitalize'
                        text= 'Laser focus'
                    />
                    <Paragraph classname='paragraph text-dark-blue w-623px' text={text} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mission