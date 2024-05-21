import React from 'react'
import Span from '../utilities/Span'
import Heading from '../utilities/Heading'
import Paragraph from '../utilities/Paragraph'

import { FaCaretRight } from "react-icons/fa6";
import Button from '../utilities/Button';

const PricingCard = ({amount, subHeading, heading, peraTxt, firstListTxt, secondListTxt, ThirdListTxt, forthListTxt, fifthListTxt, sixthListTxt, iconClass, classList, landingPageLink, websitePageLink, complexProjectLick, btnTxt}) => {
  return (
    <>
        <div className='w-406px bg-gray py-16 pl-12 hover:bg-pricingCardBg [&>h6]:hover:text-white'>
            <div className='flex items-center gap-x-2'>
                <Span className= 'midHeading' text={amount} />
                <Heading
                    Heading={'h5'}
                    className= 'paragraph text-royal-blue capitalize opacity-100'
                    text={subHeading}
                />
            </div>
            <Heading 
                Heading={'h3'}
                className= 'cardHeading text-dark-blue capitalize font-medium mt-5'
                text= {heading}
            />
            <Paragraph classname='paragraph w-281px text-dark-blue mt-2' text={peraTxt} />
            <div className='mt-20 flex flex-col gap-y-5'>
                <div className='flex items-center gap-x-3'>
                    <FaCaretRight className='text-vista-green text-3xl' />
                    <Heading 
                        Heading={'h6'}
                        className= 'paragraph text-dark-blue opacity-100'
                        text={firstListTxt}
                    />
                </div>  
                <div className='flex items-center gap-x-3'>
                    <FaCaretRight className='text-vista-green text-3xl' />
                    <Heading 
                        Heading={'h6'}
                        className= 'paragraph text-dark-blue opacity-100'
                        text={secondListTxt}
                    />
                </div>  
                <div className='flex items-center gap-x-3'>
                    <FaCaretRight className='text-vista-green text-3xl' />
                    <Heading 
                        Heading={'h6'}
                        className= 'paragraph text-dark-blue opacity-100'
                        text={ThirdListTxt}
                    />
                </div>  
                <div className='flex items-center gap-x-3'>
                    <FaCaretRight className={iconClass} />
                    <Heading 
                        Heading={'h6'}
                        className={classList}
                        text={forthListTxt}
                    />
                </div>  
                <div className='flex items-center gap-x-3'>
                    <FaCaretRight className={iconClass} />
                    <Heading 
                        Heading={'h6'}
                        className= {classList}
                        text={fifthListTxt}
                    />
                </div>  
            </div>
            <div className='mt-20 w-254px mx-auto'>
                <Button href={landingPageLink} className= 'text-gray text-lg font-manrope font-semibold leading-8 bg-dark-blue rounded-half py-15px px-51px capitalize hover:text-dark-blue hover:bg-yellow' text={btnTxt} />
            </div>
        </div>
    </>
  )
}

export default PricingCard