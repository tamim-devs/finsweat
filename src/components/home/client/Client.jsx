import React from 'react'
import Paragraph from '../../utilities/Paragraph'
import Image from '../../utilities/Image'
import clientImg from '../../../assets/home/client-img.png'

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Heading from '../../utilities/Heading'

const Client = () => {

    let headingText = '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."'

  return (
    <>
        <section className='bg-soft-gray py-130px'>
            <div className="max-w-container mx-auto">
                <div className='flex gap-x-110 justify-between'>
                    <div>
                        <Heading 
                            Heading={'h3'}
                            className= 'midHeading w-328px'
                            text= 'What our clients say about us'
                        />
                        <Paragraph classname='paragraph w-328px mt-4 text-dark-blue' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.' />
                    </div>
                    <div>
                        <Heading 
                            Heading={'h5'}
                            className= 'miniHeading normal-case'
                            text= {headingText}
                        />
                        <div className='flex items-center justify-between mt-12'>
                            <div className='flex gap-x-2 items-center'>
                                <div className='w-52px h-52px rounded-full overflow-hidden'>
                                    <Image src={clientImg} alt='not found' className='img'/>
                                </div>
                                <div>
                                    <Heading 
                                        Heading={'h5'}
                                        className= 'text-lg font-poppins font-medium text-dark-blue leading-8 capitalize'
                                        text= 'Jenny Wilson'
                                    />
                                    <Heading 
                                        Heading= 'h6'
                                        className= 'text-xs font-poppins font-medium text-dark-blue leading-7 capitalize'
                                        text= 'vice president'
                                    />
                                </div>
                            </div>
                            <div className='flex items-center gap-x-3'>
                                <FaAngleLeft className='angleIcon'/>
                                <FaAngleRight className='angleIcon'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Client