import React from 'react'
import Heading from '../../utilities/Heading'
import TeamCard from '../../cards/TeamCard'

import img1 from '../../../assets/about/team1.png'
import img2 from '../../../assets/about/team2.png'
import img3 from '../../../assets/about/team3.png'
import img4 from '../../../assets/about/team4.png'

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <section className='bg-gray py-128px'>
        <div className="max-w-container mx-auto">
            <Heading 
                Heading={'h2'}
                className= 'subHeading text-center'
                text= 'Meet our team'
            />
            <div className='flex gap-x-8 mt-12'>
                <TeamCard 
                    src={img1}
                    icon1={<FaFacebook />}
                    icon2={<FaTwitter />}
                    icon3={<FaLinkedin />}
                    headingText= 'John Smith'
                    subText= 'CEO'
                />
                <TeamCard 
                    src={img2}
                    icon1={<FaFacebook />}
                    icon2={<FaTwitter />}
                    icon3={<FaLinkedin />}
                    headingText= 'Simon Adams'
                    subText= 'CTO'
                />
                <TeamCard 
                    src={img3}
                    icon1={<FaFacebook />}
                    icon2={<FaTwitter />}
                    icon3={<FaLinkedin />}
                    headingText= 'Paul Jones'
                    subText= 'Design Lead'
                />
                <TeamCard 
                    src={img4}
                    icon1={<FaFacebook />}
                    icon2={<FaTwitter />}
                    icon3={<FaLinkedin />}
                    headingText= 'Sara Hardin'
                    subText= 'Project Manager'
                />
                {/* <div className='w-296px bg-white px-16 pt-12 pb-8'>    
                    <div className='w-168px h-168px overflow-hidden rounded-full relative [&>div]:hover:opacity-100'>
                        <Image src={img1} alt='not found' className= 'w-full h-full object-cover' />
                        <div className='absolute left-0 bottom-0 bg-teamGradient h-full w-full opacity-0 transition-all duration-500'>
                            <div className='absolute left-14 bottom-7 text-white flex gap-x-3'>
                                <HyperLink href= '#' text={<FaFacebook />} />
                                <HyperLink href= '#' text={<FaTwitter />} />
                                <HyperLink href= '#' text={<FaLinkedin />} />
                            </div>
                        </div>
                    </div>
                    <Heading 
                        Heading={'h3'}
                        className= 'cardHeading text-dark-blue text-center mt-30px'
                        text= 'John Smith'
                    />
                    <Paragraph classname= 'paragraph text-dark-blue uppercase text-center' text= 'ceo' />
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Team