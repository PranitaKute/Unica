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
          <p>Unica is a jewelry brand owned by Saloni Khinwasara & Sanchita Humane. A finance head & an artist at heart, Sanchita started Pastels&Tints with a vision to pour her love for colors turning it into the products you will love to add to your spaces! While Saloni is a product designing student and also has hands on making various prototypes and new product designs.</p>
          <p>At Unica we offer you the best selection of products at unbeatable prices. Our online store has become synonymous with quality and we ensure a continuous variety of fantastic merchandise along with unique limited edition and seasonal items that fit any budget.</p>
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
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eligendi, repellendus voluptatem cum minima officia? Ipsam exercitationem doloribus quis perspiciatis nihil veritatis tempore, odio asperiores, laudantium laborum harum consectetur at?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience: </b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eligendi, repellendus voluptatem cum minima officia? Ipsam exercitationem doloribus quis perspiciatis nihil veritatis tempore, odio asperiores, laudantium laborum harum consectetur at?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service: </b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eligendi, repellendus voluptatem cum minima officia? Ipsam exercitationem doloribus quis perspiciatis nihil veritatis tempore, odio asperiores, laudantium laborum harum consectetur at?</p>
        </div>
      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default About
