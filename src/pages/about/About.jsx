import React from 'react'

import Goal from '../../components/about/goal/Goal'
import Problem from '../../components/about/problem/Problem'
import Process from '../../components/about/process/Process'
import Mission from '../../components/about/mission/Mission'
import Benefit from '../../components/about/benefit/Benefit'
import Team from '../../components/about/team/Team'

const About = () => {

  return (
    <>
        <Problem />
        <Goal />
        <Process />
        <Mission />
        <Benefit />
        <Team />
    </>
  )
}

export default About