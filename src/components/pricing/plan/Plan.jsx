import React from 'react'
import Heading from '../../utilities/Heading'
import Paragraph from '../../utilities/Paragraph'
import PricingCard from '../../cards/PricingCard'
import Span from '../../utilities/Span'

import { FaCaretRight } from "react-icons/fa6";
import Button from '../../utilities/Button'

const Plan = () => {

    let peraTxt = 'When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.'

  return (
    <section className='py-128px'>
        <div className="max-w-container mx-auto">
            <Heading 
                Heading={'h2'}
                className= 'subHeading text-center capitalize'
                text= 'Our Pricing Plans'
            />
            <Paragraph classname= 'paragraph max-w-562px text-dark-blue text-center mx-auto mt-4' text= {peraTxt} />
            <div className='flex gap-x-8 mt-16'>
                <div className='w-406px bg-gray pt-16 pb-205px pl-12 hover:bg-pricingCardBg hover:bg-no-repeat hover:bg-center hover:bg-cover group relative'>
                    <div className='flex items-center gap-x-2'>
                        <Span className= 'midHeading group-hover:text-white' text= '$299' />
                        <Heading
                            Heading={'h5'}
                            className= 'paragraph text-royal-blue capitalize opacity-100 group-hover:text-yellow'
                            text= 'per design'
                        />
                    </div>
                    <Heading 
                        Heading={'h3'}
                        className= 'cardHeading text-dark-blue capitalize font-medium mt-5 group-hover:text-white'
                        text= 'landing page'
                    />
                    <Paragraph classname='paragraph w-281px text-dark-blue mt-2 group-hover:text-white' text= 'When you’re ready to go beyond prototyping in Figma, ' />
                    <div className='mt-20 flex flex-col gap-y-5'>
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'All limited links'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'Own analytics platform'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'Chat support'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className= 'text-dust text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue group-hover:text-white'
                                text= 'Optimize hashtags'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className= 'text-dust text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue group-hover:text-white'
                                text= 'Unlimited users'
                            />
                        </div>  
                    </div>
                    <div className='absolute left-2/4 bottom-16 -translate-x-2/4'>
                        <Button href='#' className= 'text-gray text-lg font-manrope font-semibold leading-8 bg-dark-blue rounded-half py-15px px-51px capitalize group-hover:text-dark-blue group-hover:bg-yellow' text= 'get started' />
                    </div>
                </div>
                <div className='w-406px bg-gray pt-16 pb-205px pl-12 hover:bg-pricingCardBg hover:bg-no-repeat hover:bg-center hover:bg-cover group relative'>
                    <div className='flex items-center gap-x-2'>
                        <Span className= 'midHeading group-hover:text-white' text= '$399' />
                        <Heading
                            Heading={'h5'}
                            className= 'paragraph text-royal-blue capitalize opacity-100 group-hover:text-yellow'
                            text= 'multi design'
                        />
                    </div>
                    <Heading 
                        Heading={'h3'}
                        className= 'cardHeading text-dark-blue capitalize font-medium mt-5 group-hover:text-white'
                        text= 'website page'
                    />
                    <Paragraph classname='paragraph w-281px text-dark-blue mt-2 group-hover:text-white' text= 'When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.' />
                    <div className='mt-14 flex flex-col gap-y-5'>
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'All limited links'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'Own analytics platform'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'Chat support'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className= 'text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'Optimize hashtags'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className= 'text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'Unlimited users'
                            />
                        </div>  
                    </div>
                    <div className='absolute left-2/4 bottom-16 -translate-x-2/4'>
                        <Button href='#' className= 'text-gray text-lg font-manrope font-semibold leading-8 bg-dark-blue rounded-half py-15px px-51px capitalize group-hover:text-dark-blue group-hover:bg-yellow' text= 'get started' />
                    </div>
                </div>
                <div className='w-406px bg-gray pt-16 pb-205px pl-12 hover:bg-pricingCardBg hover:bg-no-repeat hover:bg-center hover:bg-cover group relative'>
                    <div className='flex items-center gap-x-2'>
                        <Span className= 'midHeading group-hover:text-white' text= '$499 +' />
                        <Heading
                            Heading={'h5'}
                            className= 'paragraph text-royal-blue capitalize opacity-100 group-hover:text-yellow'
                            text= 'per design'
                        />
                    </div>
                    <Heading 
                        Heading={'h3'}
                        className= 'cardHeading text-dark-blue capitalize font-medium mt-5 group-hover:text-white'
                        text= 'complex project'
                    />
                    <Paragraph classname='paragraph w-281px text-dark-blue mt-2 group-hover:text-white' text= 'When you’re ready to go beyond prototyping in Figma, ' />
                    <div className='mt-10 flex flex-col gap-y-5'>
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'All limited links'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'Own analytics platform'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'Chat support'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className= 'text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'Optimize hashtags'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className= 'text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'Unlimited users'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className= 'text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100 group-hover:text-white'
                                text= 'Assist and Help'
                            />
                        </div>  
                    </div>
                    <div className='absolute left-2/4 bottom-16 -translate-x-2/4'>
                        <Button href='#' className= 'text-gray text-lg font-manrope font-semibold leading-8 bg-dark-blue rounded-half py-15px px-51px capitalize group-hover:text-dark-blue group-hover:bg-yellow' text= 'get started' />
                    </div>
                </div>
                {/* <div className='w-406px bg-gray py-16 pl-12 hover:bg-pricingCardBg'>
                    <div className='flex items-center gap-x-2'>
                        <Span className= 'midHeading' text= '$299' />
                        <Heading
                            Heading={'h5'}
                            className= 'paragraph text-royal-blue capitalize opacity-100'
                            text= 'per design'
                        />
                    </div>
                    <Heading 
                        Heading={'h3'}
                        className= 'cardHeading text-dark-blue capitalize font-medium mt-5'
                        text= 'landing page'
                    />
                    <Paragraph classname='paragraph w-281px text-dark-blue mt-2' text= 'When you’re ready to go beyond prototyping in Figma, ' />
                    <div className='mt-20 flex flex-col gap-y-5'>
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100'
                                text= 'All limited links'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100'
                                text= 'Own analytics platform'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100'
                                text= 'Chat support'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className= 'text-dust text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue'
                                text= 'Optimize hashtags'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className= 'text-dust text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue'
                                text= 'Unlimited users'
                            />
                        </div>  
                    </div>
                    <div className='mt-20 w-254px mx-auto'>
                        <Button href='#' className= 'text-gray text-lg font-manrope font-semibold leading-8 bg-dark-blue rounded-half py-15px px-51px capitalize hover:text-dark-blue hover:bg-yellow' text= 'get started' />
                    </div>
                </div>
                <div className='w-406px bg-gray py-16 pl-12 hover:bg-pricingCardBg'>
                    <div className='flex items-center gap-x-2'>
                        <Span className= 'midHeading' text= '$299' />
                        <Heading
                            Heading={'h5'}
                            className= 'paragraph text-royal-blue capitalize opacity-100'
                            text= 'per design'
                        />
                    </div>
                    <Heading 
                        Heading={'h3'}
                        className= 'cardHeading text-dark-blue capitalize font-medium mt-5'
                        text= 'landing page'
                    />
                    <Paragraph classname='paragraph w-281px text-dark-blue mt-2' text= 'When you’re ready to go beyond prototyping in Figma, ' />
                    <div className='mt-20 flex flex-col gap-y-5'>
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100'
                                text= 'All limited links'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100'
                                text= 'Own analytics platform'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className='text-vista-green text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue opacity-100'
                                text= 'Chat support'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className= 'text-dust text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue'
                                text= 'Optimize hashtags'
                            />
                        </div>  
                        <div className='flex items-center gap-x-3'>
                            <FaCaretRight className= 'text-dust text-3xl' />
                            <Heading 
                                Heading={'h6'}
                                className= 'paragraph text-dark-blue'
                                text= 'Unlimited users'
                            />
                        </div>  
                    </div>
                    <div className='mt-20 w-254px mx-auto'>
                        <Button href='#' className= 'text-gray text-lg font-manrope font-semibold leading-8 bg-dark-blue rounded-half py-15px px-51px capitalize hover:text-dark-blue hover:bg-yellow' text= 'get started' />
                    </div>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Plan