import React from 'react'
import Heading from '../../components/utilities/Heading'
import Paragraph from '../../components/utilities/Paragraph'
import Input from '../../components/utilities/Input'
import Button from '../../components/utilities/Button'

const Contact = () => {
  return (
    <section className='py-128px'>
        <div className="max-w-container mx-auto">
            <Heading 
                Heading={'h2'}
                className= 'subHeading text-center capitalize'
                text= 'contact us'
            />
            <Paragraph classname= 'paragraph max-w-562px text-dark-blue mt-4 text-center mx-auto' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' />
            <div className='w-1063px mx-auto mt-16 bg-gray pt-58px pb-66px px-76px'>
                <form action="" method=''>
                    <div className='flex  justify-between'>    
                        <div className='contact-txt flex flex-col gap-y-2'>
                            <label htmlFor="name">Name</label>
                            <Input type= 'text' name='name' placeholder= 'enter your name' className= 'contact-input' />
                        </div>
                        <div className='contact-txt flex flex-col gap-y-2'>
                            <label htmlFor="email">email</label>
                            <Input type= 'email' name='email' placeholder= 'enter your email' className= 'contact-input' />
                        </div>
                    </div>
                    <div className='flex  justify-between mt-6'>    
                        <div className='contact-txt flex flex-col gap-y-2'>
                            <label htmlFor="subject">subject</label>
                            <Input type= 'text' name='subject' placeholder= 'provide context' className= 'contact-input' />
                        </div>
                        <div className='contact-txt flex flex-col gap-y-2'>
                            <label htmlFor="subject">subject</label>
                            <select name="subject" id="subject" className='contact-input'>
                                <option value="select-subject">select subject</option>
                                <option value="marketing">marketing</option>
                                <option value="graphic-design">graphic design</option>
                                <option value="development">development</option>
                                <option value="mern-stack">mern stack</option>
                            </select>
                        </div>
                    </div>
                    <div className='contact-txt flex flex-col gap-y-2 mt-4'>
                        <label htmlFor="message">message</label>
                        <textarea className='contact-input w-full' placeholder='Write your  question here' />
                    </div>
                </form>
                <Button href='#' className='commonBtn bg-dark-blue mt-8' text= 'send message' />
            </div>
        </div>
    </section>
  )
}

export default Contact