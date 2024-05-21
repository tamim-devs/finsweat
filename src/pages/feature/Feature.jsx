import React from 'react'

import Banner from '../../components/feature/banner/Banner'
import Logo from '../../components/feature/logo/Logo'
import Benefits from '../../components/feature/benefits/Benefits'
import Client from '../../components/feature/client/Client'
import Rivision from '../../components/feature/rivision/Rivision'
import Sapport from '../../components/feature/sapport/Sapport'
import Delivar from '../../components/feature/delivar/Delivar'
import Question from '../../components/feature/question/Question'

const Feature = () => {
  return (
    <>
        <Banner />
        <Logo />
        <Benefits />
        <Client />
        <Rivision />
        <Sapport />
        <Delivar />
        <Question />
    </>
  )
}

export default Feature