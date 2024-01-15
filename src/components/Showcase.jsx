import React from 'react'
import Person from '../assets/images/person.png'

const Showcase = () => {
  return (
    <div className='md:px-14 font-poppins my-12 md:my-20 text-black'>
        <div className='flex flex-col md:flex-row md:items-center md:space-x-12'>
            <div className='flex flex-col md:w-1/2 md:py-20'>
                <h1 className='text-3xl md:text-4xl font-medium'>Discover Our Collection of Faith-Inspired Events That Make a Difference</h1>
                <p className='text-base md:text-lg font-light mt-2.5 md:pe-20'>Support our cause and make a positive impact with every act of kindness.</p>
                <h5 className='text-xl md:text-2xl mt-3 md:mt-7'>Join Us</h5>
                <p className='text-sm md:text-base font-light md:pe-60'>Become part of our community and help us make a lasting impact.</p>
            </div>
            <div className='flex flex-col md:w-1/2 mt-10 md:mt-0'>
                <img src={Person} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Showcase
