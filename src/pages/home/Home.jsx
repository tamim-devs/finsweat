import React from 'react'
import Banner from '../../components/home/banner/Banner'
import Work from '../../components/home/work/Work'
import Project from '../../components/home/project/Project'
import Product from '../../components/home/product/Product'
import Client from '../../components/home/client/Client'
import Question from '../../components/home/question/Question'
import Build from '../../components/home/build/Build'
import Blog from '../../components/home/blog/Blog'

const Home = () => {
  return (
    <>
        <Banner />
        <Work />
        <Project />
        <Product />
        <Client />
        <Question />
        <Build />
        <Blog />
    </>
  )
}

export default Home