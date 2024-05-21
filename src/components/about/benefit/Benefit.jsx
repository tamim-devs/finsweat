import React from 'react'
import Heading from '../../utilities/Heading'
import CardClient from '../../cards/CardClient'
import Span from '../../utilities/Span';
import Paragraph from '../../utilities/Paragraph';
import Image from '../../utilities/Image';

import { GiNotebook } from "react-icons/gi";
import { FaPencilRuler } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

import logo1 from '../../../assets/about/logo1.png'
import logo2 from '../../../assets/about/logo2.png'
import logo3 from '../../../assets/about/logo3.png'
import logo4 from '../../../assets/about/logo4.png'
import logo5 from '../../../assets/about/logo5.png'

const Benefit = () => {
  return (
    <section className='bg-white py-128px'>
        <div className="max-w-container mx-auto">
            <Heading 
                Heading={'h2'}
                className= 'subHeading max-w-630px text-center mx-auto'
                text= 'The benefits of working with us'
            />
            <div className='flex gap-x-8 mt-12'>
                <div className='bg-gray'>
                    <CardClient
                        icon={<GiNotebook />}
                        headingText= 'Customize with ease'
                        peraText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'
                    />
                </div>
                <div className='bg-gray'>
                    <CardClient
                        icon={<FaPencilRuler />}
                        headingText= 'Perfectly Responsive'
                        peraText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'
                    />
                </div>
                <div className='bg-gray'>
                    <CardClient
                        icon={<FaUsers />}
                        headingText= 'Friendly Support'
                        peraText= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'
                    />
                </div>
            </div>
            <div className='mt-12 flex justify-between items-center'>
                <div>
                    <Span className= 'midHeading' text= '100.000+' />
                    <Paragraph classname= 'paragraph text-dark-blue capitalize' text= 'finsweet users' />
                </div>
                <picture>
                    <Image src={logo1} alt='logo' />
                </picture>
                <picture>
                    <Image src={logo2} alt='logo' />
                </picture>
                <picture>
                    <Image src={logo3} alt='logo' />
                </picture>
                <picture>
                    <Image src={logo4} alt='logo' />
                </picture>
                <picture>
                    <Image src={logo5} alt='logo' />
                </picture>
            </div>
        </div>
    </section>
  )
}

export default Benefit