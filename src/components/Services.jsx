import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { IoStar } from "react-icons/io5";

const Services = () => {
  return (
    <div className='md:px-14 font-poppins my-12 md:my-20 text-black' id='work'>
        <div className=''>
            <h1 className='text-3xl md:text-4xl font-medium text-center'>Discover Our Life-Transforming Services</h1>
            <div className='flex flex-col md:flex-row md:items-center md:space-x-6 text-black mt-7'>
            <div className='flex flex-col md:w-1/3 text-center'>
                <div className=''>
                    <div className='flex justify-center'>
                        <IoStar className="text-purple" size={24} />
                    </div>
                    <h4 className='text-lg md:text-2xl font-medium mt-2.5 px-5 md:px-0'>Experience Compassion and Hope Restoration</h4>
                    <p className='text-sm md:text-base font-light mt-2.5'>At our organization, we have a well-defined process to provide assistance to people in need. We believe in making a positive impact on their lives and restoring hope.</p>
                    <div className='flex justify-center'>
                        <div className='flex mt-4 md:mt-7'>
                            <button className='flex items-center gap-2 cursor-pointer outline-none transition-all font-poppins font-normal text-base text-purple md:text-lg'>Learn More <GoArrowRight size={24} className='text-purple' /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:w-1/3 text-center mt-6 md:mt-0'>
                <div className=''>
                    <div className='flex justify-center'>
                        <IoStar className="text-purple" size={24} />
                    </div>
                    <h4 className='text-lg md:text-2xl font-medium mt-2.5 px-5 md:px-0'>Empowering Lives Through Faith and Support</h4>
                    <p className='text-sm md:text-base font-light mt-2.5'>At our organization, we have a well-defined process to provide assistance to people in need. We believe in making a positive impact on their lives and restoring hope.</p>
                    <div className='flex justify-center'>
                        <div className='flex mt-4 md:mt-7'>
                            <button className='flex items-center gap-2 cursor-pointer outline-none transition-all font-poppins font-normal text-base text-purple md:text-lg'>Volunteer <GoArrowRight size={24} className='text-purple' /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:w-1/3 text-center mt-6 md:mt-0'>
                <div className=''>
                    <div className='flex justify-center'>
                        <IoStar className="text-purple" size={24} />
                    </div>
                    <h4 className='text-lg md:text-2xl font-medium mt-2.5 px-5 md:px-0'>Join Our Mission to Make a Difference</h4>
                    <p className='text-sm md:text-base font-light mt-2.5'>At our organization, we have a well-defined process to provide assistance to people in need. We believe in making a positive impact on their lives and restoring hope.</p>
                    <div className='flex justify-center'>
                        <div className='flex mt-4 md:mt-7'>
                            <button className='flex items-center gap-2 cursor-pointer outline-none transition-all font-poppins font-normal text-base text-purple md:text-lg'>Donate <GoArrowRight size={24} className='text-purple' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services
