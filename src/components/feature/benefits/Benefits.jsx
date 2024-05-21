import React from 'react'
import Heading from '../../utilities/Heading'
import CardClient from '../../cards/CardClient'
import { FaPencilRuler } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6'
import { GiNotebook } from 'react-icons/gi'

const Benefits = () => {
  return (
    <section>
        <div className="max-w-container mx-auto">
            <Heading 
                Heading={'h2'}
                className= 'subHeading max-w-630px text-center mx-auto'
                text= 'The benefits of working with our team'
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
        </div>
    </section>
  )
}

export default Benefits