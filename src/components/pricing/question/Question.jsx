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
                </div>
            </div>
        </section>
    </>
  )
}

export default Question