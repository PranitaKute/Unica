import React from 'react'
import { assets } from '../assets/assets'
import Unica from '../assets/UnicaLogo.jpg'


const Footer = () => {
  return (
    <div className=''>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={Unica} className='mb-5 w-32' alt=''/>
            <p className='w-full md:w-2/3 text-gray-600'>
            <b>Timeless Beauty, Enduring Legacy.</b></p>
             <p className='w-full md:w-2/3 text-gray-600'>
             Crafted with care, designed for every moment. Discover jewelry that celebrates your unique story
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 9371462442</li>
                <li>beunica.11@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
            <hr/>
            <p className='py-5 text-sm text-center'>
                Copyright 2025@ unica.com - All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer
