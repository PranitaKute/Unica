import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../assets/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <Testimonials/>
      {/* Instead of newsletter, we can have Why Shop from... Or something else */}
      {/* <NewsLetterBox/>  */}
    </div>
  )
}

export default Home
