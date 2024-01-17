import React from 'react'
import BigStar from '../assets/images/big_star.png'
import UnityImg from '../assets/images/unity.png'

const Feature = () => {
  return (
    <div className='md:px-14 font-poppins my-10 md:mt-20' id='about'>
        <div className='flex flex-col md:flex-row md:items-center md:space-x-12'>
            <div className='flex flex-col md:w-1/2 md:py-20'>
                <img src={BigStar} alt="" className='w-10' />
                <h4 className='text-3xl md:text-4xl text-black font-medium my-7'>Transforming Lives Through Compassion: Our Approach to Helping Those in Need</h4>
                <p className='text-lg text-black font-light'>At our organization, we believe in the power of compassion to bring hope and restore lives. Through our dedicated efforts, we strive to make a positive impact on the lives of those facing adversity.</p>
            </div>
            <div className='flex flex-col md:w-1/2 mt-10 md:mt-0'>
                <img src={UnityImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Feature
