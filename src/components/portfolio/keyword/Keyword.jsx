import React from 'react'
import HyperLink from '../../utilities/HyperLink'

const Keyword = () => {
  return (
    <section>
        <div className="max-w-container mx-auto">
            <div className='w-952px py-6 border-y border-border-color flex justify-between items-center ml-220px'>
                <HyperLink href='#' className= 'keyword' text= 'keywords' />
                <HyperLink href='#' className= 'keyword' text= 'Design' />
                <HyperLink href='#' className= 'keyword' text= 'UI/UX ' />
                <HyperLink href='#' className= 'keyword' text= 'Wireframing' />
                <HyperLink href='#' className= 'keyword' text= 'Branding' />
                <HyperLink href='#' className= 'keyword' text= 'Development' />
            </div>
        </div>
    </section>
  )
}

export default Keyword