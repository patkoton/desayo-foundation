import React from 'react'
import BlackWImg from '../assets/images/black_women.png'
import { empowerment } from '../data'
import Button from '../elements/Button'
import { GoArrowRight } from "react-icons/go";
import { IoStar } from "react-icons/io5";

const Benefit = () => {
  return (
    <div className='md:px-14 font-poppins mb-12 md:my-20'>
        <div className='flex flex-col-reverse md:flex-row md:space-x-12 md:items-center'>
            <div className='flex flex-col md:w-1/2 mt-12 md:mt-0'>
                 <img src={BlackWImg} alt="" />
            </div>
            <div className='flex flex-col md:w-1/2 text-black md:mt-0'>
                <h1 className='text-base md:text-lg font-light'>Empowerment</h1>
                <h3 className='font-medium text-3xl md:text-4xl mt-2.5'>Transforming Lives Through Compassion and Hope</h3>
                <p className='text-base md:text-lg font-light mt-2.5'>Our organization is dedicated to making a positive impact in the community by providing support, resources, and opportunities for those in need. Through our compassionate and hope-restoring efforts, we aim to empower individuals and transform lives.</p>
                
                <div className='flex flex-row space-x-4 md:space-x-6 mt-6'>
                    {empowerment.map((item) => { 
                        return  <div className='flex w-1/2'>
                                    <div>
                                        <IoStar className="text-purple" size={24} />
                                        <h4 className='text-lg md:text-2xl font-medium mt-2.5'>{item.section}</h4>
                                        <p className='text-base md:text-lg font-light mt-2.5'>{item.description}</p>
                                    </div>
                                </div>
                    })}
                </div>
                <div className='flex mt-7 gap-4 md:gap-6'>
                    <Button children='Learn More' className='text-purple font-normal px-2 md:px-6' />
                    <button className='flex items-center gap-2 cursor-pointer outline-none transition-all font-poppins font-normal text-base text-purple md:text-lg'>Volunteer <GoArrowRight size={24} className='text-purple' /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefit
