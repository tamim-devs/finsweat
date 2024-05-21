import React from 'react'

import logo from '../../../assets/home/logo.png'
import { NavLink } from 'react-router-dom'
import Button from '../../utilities/Button'

const Navbar = () => {
  return (
    <>
      <nav className='bg-tint-blue py-8'>
        <div className='max-w-container mx-auto'>
          <div className='flex justify-between items-center'>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className='flex items-center gap-x-12'>
              <div>
                <ul className='flex gap-x-8 items-center'>
                  <li>
                    <NavLink to='/' className= 'nav-link hover:text-white'>home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about us' className= 'nav-link hover:text-white'>about us</NavLink>
                  </li>
                  <li>
                    <NavLink to='/feature' className= 'nav-link hover:text-white'>feature</NavLink>
                  </li>
                  <li>
                    <NavLink to='/pricing' className= 'nav-link hover:text-white'>pricing</NavLink>
                  </li>
                  <li>
                    <NavLink to='/' className= 'nav-link hover:text-white'>faq</NavLink>
                  </li>
                  <li>
                    <NavLink to='/blog' className= 'nav-link hover:text-white'>blog</NavLink>
                  </li>
                </ul>
              </div>
            <div>
              <Button href= '/contact-us' className= 'commonBtn' text= 'contact us' />
            </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar