import React from 'react'

import Navbar from './navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from './footer/Footer'

const RootLayout = () => {
  return (
    <>
      <Navbar/> 
        <Outlet/>
      <Footer />
    </>
  )
}

export default RootLayout