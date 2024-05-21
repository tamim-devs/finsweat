import React from 'react'
import CardClient from '../../cards/CardClient'

import { FaUsers } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaPencilRuler } from "react-icons/fa";
import { BsAlarmFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import Heading from '../../utilities/Heading';


const Product = () => {
  return (
    <>
        <section className='bg-gray py-128px'>
            <div className="max-w-container mx-auto">
              <Heading 
                Heading={'h6'}
                className= 'smallHeading text-center'
                text= 'feature'
              />
              <Heading 
                Heading={'h2'}
                className= 'subHeading max-w-630px text-center mx-auto mt-3'
                text= 'Design that solves problems, one product at a time'
              />
                <div className='mt-12 flex flex-wrap gap-y-24 gap-x-8'>
                  <div className='bg-white'>
                    <CardClient
                      icon={<FaUsers />}
                      headingText='Uses Client First'
                      peraText='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
                    />
                  </div>
                  <div className='bg-white'>
                    <CardClient
                      icon={<FaCheckCircle />}
                      headingText='Two Free Revision Round'
                      peraText='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
                    />
                  </div>
                  <div className='bg-white'>
                    <CardClient
                      icon={<FaPencilRuler />}
                      headingText='Template Customization'
                      peraText='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
                    />
                  </div>
                  <div className='bg-white'>
                    <CardClient
                      icon={<BiSolidMessageRounded />}
                      headingText='24/7 Support'
                      peraText='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
                    />
                  </div>
                  <div className='bg-white'>
                    <CardClient
                      icon={<BsAlarmFill />}
                      headingText='Quick Delivery'
                      peraText='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
                    />
                  </div>
                  <div className='bg-white'>
                    <CardClient
                      icon={<GiNotebook />}
                      headingText='Hands-on approach'
                      peraText='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '
                    />
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Product