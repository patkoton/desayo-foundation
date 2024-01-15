import React from 'react'
import Layout from '../layout/Layout'
import Hero from '../components/Hero'
import Benefit from '../components/Benefit'
import Feature from '../components/Feature'
import Works from '../components/Works'
import Services from '../components/Services'
import Showcase from '../components/Showcase'

const Home = () => {
  return (
    <Layout>
        <Hero />
        <Feature />
        <Benefit />
        <Works />
        <Services />
        <Showcase />
    </Layout>
  )
}

export default Home
