import React from 'react'

import Image from '../../utilities/Image'
import Paragraph from '../../utilities/Paragraph'
import Span from '../../utilities/Span'
import HyperLink from '../../utilities/HyperLink'

import logo from '../../../assets/home/logo.png'

import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Heading from '../../utilities/Heading'


const Footer = () => {

    let text = 'We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.'

  return (
    <> 
        <footer className='bg-tint-blue pt-24'>
            <div className="max-w-container mx-auto">
                <div className='flex gap-x-142'>
                    <div>
                        <picture>
                            <Image src={logo} alt='logo' />
                        </picture>
                        <Paragraph classname='paragraph font-medium opacity-80 mt-22px w-399px' text='We are always open to discuss your project and improve your online presence.' />
                        <div className='flex gap-x-29 w-517px bg-yellow pt-18px pb-4 pl-37px mt-86px'>
                            <div>
                                <Heading 
                                    Heading={'h5'}
                                    className= 'text-dark-blue text-lg font-poppins font-medium leading-8'
                                    text='contact@website.com'
                                />
                                <Span className='paragraph text-dark-blue opacity-80' text='contact@website.com'/>
                            </div>
                            <div>
                                <Heading 
                                    Heading={'h5'}
                                    className= 'text-dark-blue text-lg font-poppins font-medium leading-8'
                                    text='call us'
                                />
                                <Span className='paragraph text-dark-blue opacity-80' text='0927 6277 28525'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Heading 
                            Heading={'h2'}
                            className='subHeading text-white capitalize'
                            text='lets talk!'
                        />
                        <Paragraph classname='paragraph max-w-405px opacity-80 mt-14px' text={text} />
                        <div className='flex items-center gap-x-26 mt-7 text-white text-3xl'>
                            <HyperLink href='#' text={ <FaFacebook />} />
                            <HyperLink href='#' text={ <FaTwitter />} />
                            <HyperLink href='#' text={ <FaInstagram />} />
                            <HyperLink href='#' text={ <FaLinkedin />} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <section className='bg-white py-8'>
            <div className="max-w-container mx-auto">
                <div className='flex items-center justify-between'>
                    <Heading 
                        Heading={'h5'}
                        classname='paragraph text-dark-blue font-medium opacity-100'
                        text='Copyright 2022, Finsweet.com'
                    />
                    <ul className='flex gap-x-8 items-center'>
                        <li>
                            <Link to='/privacy-policy' className='nav-link text-dark-blue hover:text-royal-blue hover:underline'>privacy policy</Link>
                        </li>
                        <li>
                            <Link to='/terms&condition' className='nav-link text-dark-blue hover:text-royal-blue hover:underline'>terms & condition</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer