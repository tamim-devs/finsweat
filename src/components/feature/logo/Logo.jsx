import React from 'react'
import Image from '../../utilities/Image'
import Span from '../../utilities/Span'
import Paragraph from '../../utilities/Paragraph'

import logo1 from '../../../assets/feature/logo1.png'
import logo2 from '../../../assets/feature/logo2.png'
import logo3 from '../../../assets/feature/logo3.png'
import logo4 from '../../../assets/feature/logo4.png'
import logo5 from '../../../assets/feature/logo5.png'

const Logo = () => {
  return (
    <section className='py-96px'>
        <div className="max-w-container mx-auto">
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

export default Logo