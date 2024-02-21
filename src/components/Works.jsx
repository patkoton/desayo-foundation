import React from 'react'
import SmallSImg from '../assets/images/small_star.png'
import Button from '../elements/Button'
import { GoArrowRight } from "react-icons/go";

const Works = () => {
  return (
    <div className='md:px-14 font-poppins my-12 md:my-20'>
        <div className='flex flex-col md:flex-row md:items-center md:space-x-6 text-black'>
            <div className='flex flex-col md:w-1/3 text-center'>
                <div className=''>
                    <div className='flex justify-center'>
                        <img src={SmallSImg} alt="" />
                    </div>
                    <h4 className='text-lg md:text-2xl font-medium mt-2.5 px-5 md:px-10'>Our Process of Helping Those in Need</h4>
                    <p className='text-sm md:text-base font-light mt-2.5'>At our organization, we have a well-defined process to provide assistance to people in need. We believe in making a positive impact on their lives and restoring hope.</p>
                    <div className='flex justify-center'>
                        <div className='flex mt-4 md:mt-7 gap-4 md:gap-6'>
                            <Button children='Learn More' className='text-black font-normal px-2 md:px-6' />
                            <button className='flex items-center gap-2 cursor-pointer outline-none transition-all font-poppins font-normal text-base md:text-lg'>Volunteer <GoArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:w-1/3 text-center mt-10 md:mt-0'>
                <div className=''>
                    <div className='flex justify-center'>
                        <img src={SmallSImg} alt="" />
                    </div>
                    <h4 className='text-lg md:text-2xl font-medium mt-2.5 px-5 md:px-0'>Supporting Our Community Through Compassion</h4>
                    <p className='text-sm md:text-base font-light mt-2.5'>We are dedicated to helping our community by providing compassionate support to those who are facing difficult times. Our team works tirelessly to ensure that everyone receives the help they need.</p>
                    <div className='flex justify-center'>
                        <div className='flex mt-4 md:mt-7 gap-4 md:gap-6'>
                            <Button children='Learn More' className='text-black font-normal px-2 md:px-6' />
                            <button className='flex items-center gap-2 cursor-pointer outline-none transition-all font-poppins font-normal text-base md:text-lg'>Volunteer <GoArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:w-1/3 text-center mt-10 md:mt-0'>
                <div className=''>
                    <div className='flex justify-center'>
                        <img src={SmallSImg} alt="" />
                    </div>
                    <h4 className='text-lg md:text-2xl font-medium mt-2.5 px-5 md:px-0'>Transforming Lives Through Hope and Empowerment</h4>
                    <p className='text-sm md:text-base font-light mt-2.5'>We believe in the power of hope and empowerment to transform lives. Through our programs and initiatives, we aim to provide individuals with the tools and support they need to create a better future.</p>
                    <div className='flex justify-center'>
                        <div className='flex mt-4 md:mt-7 gap-4 md:gap-6'>
                            <Button children='Learn More' className='text-black font-normal px-2 md:px-6' />
                            <button className='flex items-center gap-2 cursor-pointer outline-none transition-all font-poppins font-normal text-base md:text-lg'>Volunteer <GoArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works
