import React from 'react'
import BlackWImg from '../assets/images/black_women.png'
import { empowerment } from '../data'
import Button from '../elements/Button'

const Support = () => {
  return (
    <div className='md:px-14 font-poppins md:mt-20'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center'>
            <div className='flex flex-col md:w-1/2'>
                 <img src={BlackWImg} alt="" />
            </div>
            <div className='flex flex-col md:w-1/2 text-black'>
                <h1 className='text-base md:text-lg font-light'>Empowerment</h1>
                <h3 className='font-medium text-3xl md:text-4xl mt-2.5'>Transforming Lives Through Compassion and Hope</h3>
                <p className='text-base md:text-lg font-light mt-2.5'>Our organization is dedicated to making a positive impact in the community by providing support, resources, and opportunities for those in need. Through our compassionate and hope-restoring efforts, we aim to empower individuals and transform lives.</p>
                
                <div className='flex flex-row space-x-4 md:space-x-6 mt-7'>
                    {empowerment.map((item) => { 
                        return  <div className='flex w-1/2'>
                                    <div>
                                        <img src={item.image} alt="" className='' />
                                        <h4 className='text-lg md:text-2xl font-medium mt-2.5'>{item.section}</h4>
                                        <p className='text-base md:text-lg font-light'>{item.description}</p>
                                    </div>
                                </div>
                    })}
                </div>
                <div className='flex mt-7'>
                    <Button children='Learn More' className='text-black font-medium px-4 md:px-6' />
                    <Button children='Volunteer' className='text-black border-none font-medium px-4 md:px-6' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support
