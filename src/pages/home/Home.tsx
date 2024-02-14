import  { FC } from 'react'
import Hero from '../../modules/hero/Hero'
import Layout from '../../components/layout/Layout'
import Slider from '../../modules/slider/Slider'

const Home:FC = () => {
  return (
    <>
        <Layout>
            <Hero/>
            <Slider/>
        </Layout>
    </>
  )
}

export default Home