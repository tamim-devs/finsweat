import React from 'react'
import Heading from '../../utilities/Heading'
import BlogCard from '../../cards/BlogCard'

import itemImg1 from '../../../assets/blog/item-img1.png'
import itemImg2 from '../../../assets/blog/item-img2.png'
import itemImg3 from '../../../assets/blog/item-img3.png'
import itemImg4 from '../../../assets/blog/item-img4.png'
import itemImg5 from '../../../assets/blog/item-img5.png'
import itemImg6 from '../../../assets/blog/item-img6.png'

const OurBlog = () => {
  return (
    <section className='mb-128px'>
        <div className="max-w-container mx-auto">
            <Heading 
                Heading={'h2'}
                className= 'midHeading text-center capitalize'
                text= 'our blog'
            />
            <div className='flex gap-x-8 gap-y-16 mt-12 flex-wrap'>
                <div>
                    <BlogCard 
                        src={itemImg1}
                        subHeadingtxt= '27 Jan 2021'
                        headingTxt= 'How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                        peratxt= 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
                    />
                </div>
                <div>
                    <BlogCard 
                        src={itemImg2}
                        subHeadingtxt= '27 Jan 2021'
                        headingTxt= 'How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                        peratxt= 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
                    />
                </div>
                <div>
                    <BlogCard 
                        src={itemImg3}
                        subHeadingtxt= '27 Jan 2021'
                        headingTxt= 'How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                        peratxt= 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
                    />
                </div>
                <div>
                    <BlogCard 
                        src={itemImg4}
                        subHeadingtxt= '27 Jan 2021'
                        headingTxt= 'How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                        peratxt= 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
                    />
                </div>
                <div>
                    <BlogCard 
                        src={itemImg5}
                        subHeadingtxt= '27 Jan 2021'
                        headingTxt= 'How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                        peratxt= 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
                    />
                </div>
                <div>
                    <BlogCard 
                        src={itemImg6}
                        subHeadingtxt= '27 Jan 2021'
                        headingTxt= 'How one Webflow user grew his single person consultancy from $0-100K in 14 months'
                        peratxt= 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurBlog