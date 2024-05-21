import React from 'react'
import { Link } from 'react-router-dom'
import PortfolioCard from '../../cards/PortfolioCard'

import img1 from '../../../assets/work/item-img1.png'
import img2 from '../../../assets/work/item-img2.png'
import img3 from '../../../assets/work/item-img3.png'
import img4 from '../../../assets/work/item-img4.png'
import img5 from '../../../assets/work/item-img5.png'
import img6 from '../../../assets/work/item-img6.png'

const Design = () => {
  return (
    <section className='mt-96px'>
        <div className="max-w-container mx-auto">
            <ul className='flex items-center gap-x-8 justify-center'>
                <li>
                    <Link className='design'>all</Link>
                </li>
                <li>
                    <Link className='design'>UI design</Link>
                </li>
                <li>
                    <Link className='design'>Webflow Design</Link>
                </li>
                <li>
                    <Link className='design'>Figma Design</Link>
                </li>
            </ul>
            <div className='flex flex-col gap-y-16 mt-12'>
                <div className='flex justify-between'>
                    <PortfolioCard 
                        src={img1}
                        headingtxt= 'Template 1'
                        peratxt= 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
                        lasttxt= 'view portfolio'
                    />
                    <PortfolioCard 
                        src={img2}
                        headingtxt= 'Template 2'
                        peratxt= 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
                        lasttxt= 'view portfolio'
                    />
                </div>
                <div className='flex justify-between'>
                    <PortfolioCard 
                        src={img3}
                        headingtxt= 'Template 3'
                        peratxt= 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
                        lasttxt= 'Read case study'
                    />
                    <PortfolioCard 
                        src={img4}
                        headingtxt= 'Template 4'
                        peratxt= 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
                        lasttxt= 'Read case study'
                    />
                </div>
                <div className='flex justify-between'>
                    <PortfolioCard 
                        src={img5}
                        headingtxt= 'Template 5'
                        peratxt= 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
                        lasttxt= 'Read case study'
                    />
                    <PortfolioCard 
                        src={img6}
                        headingtxt= 'Template 6'
                        peratxt= 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.'
                        lasttxt= 'Read case study'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Design