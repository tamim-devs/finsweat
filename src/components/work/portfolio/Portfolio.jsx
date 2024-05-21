import React from 'react'
import Heading from '../../utilities/Heading'
import Paragraph from '../../utilities/Paragraph'

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import HyperLink from '../../utilities/HyperLink';

const Portfolio = () => {
  return (
    <section className='bg-gray py-96px'>
        <div className="max-w-container mx-auto">
            <Heading 
                Heading={'h5'}
                className= 'paragraph text-dark-blue font-medium text-center'
                text= 'What we created'
            />
            <Heading 
                Heading={'h2'}
                className= 'subHeading max-w-504px text-center mx-auto mt-1'
                text= 'Our Work Portfolio'
            />
            <Paragraph classname= 'paragraph max-w-733px text-dark-blue font-medium text-center mt-6 mx-auto' text= 'We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.' />
            <div className='flex items-center gap-x-27 mt-8 justify-center'>
                <HyperLink href= '#' text= {<FaFacebook />} />
                <HyperLink href= '#' text= {<FaTwitter />} />
                <HyperLink href= '#' text= {<FaInstagram />} />
                <HyperLink href= '#' text= {<FaLinkedin />} />
            </div>
        </div>
    </section>
  )
}

export default Portfolio