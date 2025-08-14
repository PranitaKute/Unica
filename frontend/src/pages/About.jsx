import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-4 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about} alt="about image" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Unica is a dazzling jewelry brand brought to life by the creative minds of Saloni Khinwasara and Sanchita Humane. With a flair for finance and an artistic soul, Sanchita embarked on her journey with Pastels & Tints, fueled by her passion for vibrant hues, transforming them into delightful treasures that will enhance your spaces! Meanwhile, Saloni, a budding product design enthusiast, is deeply engaged in crafting various prototypes and exploring innovative product designs.</p>
          <p>At Unica, we present to you an exquisite array of products at prices that defy competition. Our online boutique has become a beacon of quality, and we pledge to offer an ever-evolving selection of remarkable merchandise alongside distinctive limited edition and seasonal creations that accommodate every budget.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Unica is to offer elegant, high-quality jewelry that celebrates your unique style. With a focus on exceptional service, easy exchanges, and 24/7 support, we make every purchase a delightful experience</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance: </b>
            <p className='text-gray-600'> At Unica, every piece is crafted with timeless craftsmanship and contemporary design, ensuring it’s as unique as you are. From ethically sourced materials to meticulous attention to detail, our creations reflect a deep passion for beauty, quality, and authenticity.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience: </b>
            <p className='text-gray-600'>We make shopping for fine jewellery effortless and secure, with a seamless online experience from browsing to checkout. Enjoy personalised recommendations and easy access to designs that will stand the test of time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service: </b>
            <p className='text-gray-600'>Your jewellery journey is as important as the pieces themselves. Our dedicated team provides attentive, personalised service to ensure every interaction with Unica is memorable, meaningful, and tailored to you.</p>
        </div>
      </div>

      {/* <NewsLetterBox/> */}

    </div>
  )
}

export default About
