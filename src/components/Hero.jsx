import React from 'react'
import Button from '../elements/Button'
import HeroImg from '../assets/images/hero.png'

const Hero = () => {
  return (
    <div className='font-poppins'>
        <div className='w-full flex justify-center mt-5 md:mt-28'>
                <div className='w-full md:w-9/12 text-black text-center'>
                    <h3 className='font-medium text-3xl md:text-5xl leading-10'>Bringing Hope and Transforming Lives Through Faith</h3>
                    <p className='font-normal text-lg md:text-xl my-7'>Join us in our mission to provide compassion and restore hope to those in need.</p>
                    <div className='w-full flex justify-center'>
                        <div className='flex gap-4 md:gap-10'>
                            <Button children='Learn More' className='text-black font-medium px-4 md:px-6' />
                            <Button children='Volunteer' className='bg-black text-white font-normal px-4 md:px-6' />
                        </div>
                    </div>
                </div>
        </div>
        <div className='w-full flex justify-center mt-10'>
            <div className='w-full md:w-10/12'>
                <img src={HeroImg} alt="" className='w-full' />
            </div>
        </div>
    </div>
  )
}

export default Hero
