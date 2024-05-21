import React from 'react'
import HyperLink from '../../utilities/HyperLink'
import Span from '../../utilities/Span'

import { Accordion } from "keep-react";


import Heading from '../../utilities/Heading'

const Question = () => {

    let peraText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  return (
    <>
        <section className='bg-white py-128px'>
            <div className="max-w-container mx-auto">
                <div className='flex gap-x-110'>
                    <div>
                        <Heading 
                            Heading={'h3'}
                            className= 'midHeading w-328px mb-4'
                            text= 'Frequently asked questions'
                        />
                        <HyperLink href='#' className='text-lg text-royal-blue font-poppins font-medium leading-8' text='Contact us for more info' />
                    </div>
                    <Accordion flush={true}>
                        <Accordion.Panel>
                            <Accordion.Container>
                                <div className='flex items-center gap-x-14'>
                                    <Span className= 'number' text= '01' />
                                    <Heading 
                                        Heading={'h3'}
                                        className= 'cardHeading text-dark-blue font-medium'
                                        text= 'How much time does it take?'
                                    />
                                </div>
                            <Accordion.Icon />
                            </Accordion.Container>
                            <Accordion.Content className='paragraph w-600px text-dark-blue ml-20'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Container>
                                <div className='flex items-center gap-x-14'>
                                        <Span className= 'number' text= '02' />
                                        <Heading 
                                            Heading={'h3'}
                                            className= 'cardHeading text-dark-blue font-medium'
                                            text= 'What is your class naming convention?'
                                        />
                                    </div>
                            <Accordion.Icon />
                            </Accordion.Container>
                            <Accordion.Content className='paragraph w-600px text-dark-blue ml-20'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Container>
                                <div className='flex items-center gap-x-14'>
                                    <Span className= 'number' text= '03' />
                                    <Heading 
                                        Heading={'h3'}
                                        className= 'cardHeading text-dark-blue font-medium'
                                        text= 'How do you communicate?'
                                    />
                                </div>
                            <Accordion.Icon />
                            </Accordion.Container>
                            <Accordion.Content className='paragraph w-600px text-dark-blue ml-20'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Container>
                                <div className='flex items-center gap-x-14'>
                                    <Span className= 'number' text= '04' />
                                    <Heading 
                                        Heading={'h3'}
                                        className= 'cardHeading text-dark-blue font-medium'
                                        text= 'I have a bigger project. Can you handle it?'
                                    />
                                </div>
                            <Accordion.Icon />
                            </Accordion.Container>
                            <Accordion.Content className='paragraph w-600px text-dark-blue ml-20'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Container>
                                <div className='flex items-center gap-x-14'>
                                    <Span className= 'number' text= '05' />
                                    <Heading 
                                        Heading={'h3'}
                                        className= 'cardHeading text-dark-blue font-medium'
                                        text= 'What is your class naming convention?'
                                    />
                                </div>
                            <Accordion.Icon />
                            </Accordion.Container>
                            <Accordion.Content className='paragraph w-600px text-dark-blue ml-20'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                    {/* <div className='flex flex-col gap-y-16'>
                        <div className='flex items-start justify-between mb-16px'>
                            <div className='flex gap-x-14'>
                                <Span className='number' text='01'/>
                                <div>
                                    <HeadingThree className='cardHeading text-dark-blue' text='How much time does it take?' />
                                    <Paragraph classname='paragraph max-w-624px text-dark-blue mt-4' text={peraText} />
                                </div>
                            </div>
                            <div>
                                <GoPlus className='text-2xl rotate-45 text-dark-blue opacity-70' />
                            </div>
                        </div>
                        <div className='accordion after:contentspace'>
                            <div className='flex gap-x-14'>
                                <Span className='number' text='02'/>
                                <div>
                                    <HeadingThree className='cardHeading text-dark-blue' text='What is your class naming convention?' />
                                </div>
                            </div>
                            <div>
                                <GoPlus className='text-2xl text-dark-blue opacity-70' />
                            </div>
                        </div>
                        <div className='accordion after:contentspace'>
                            <div className='flex gap-x-14'>
                                <Span className='number' text='03'/>
                                <div>
                                    <HeadingThree className='cardHeading text-dark-blue' text='How do you communicate?' />
                                </div>
                            </div>
                            <div>
                                <GoPlus className='text-2xl text-dark-blue opacity-70' />
                            </div>
                        </div>
                        <div className='accordion after:contentspace'>
                            <div className='flex gap-x-14'>
                                <Span className='number' text='04'/>
                                <HeadingThree className='cardHeading text-dark-blue' text='I have a bigger project. Can you handle it?' />
                            </div>
                            <div>
                                <GoPlus className='text-2xl text-dark-blue opacity-70' />
                            </div>
                        </div>
                        <div className='accordion after:contentspace'>
                            <div className='flex gap-x-14'>
                                <Span className='number' text='05'/>
                                    <HeadingThree className='cardHeading text-dark-blue' text='What is your class naming convention?' />
                            </div>
                            <div>
                                <GoPlus className='text-2xl text-dark-blue opacity-70' />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Question