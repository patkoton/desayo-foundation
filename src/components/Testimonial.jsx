import React from 'react'
import { testimonial } from '../data'
import { IoStar } from "react-icons/io5";

const Testimonial = () => {
  return (
    <div className='md:px-14 font-poppins mb-12 md:my-20 text-black'>
        <h1 className='text-3xl md:text-4xl font-semibold'>Heartwarming Stories</h1>
        <p className='text-base md:text-lg font-light mt-2.5'>Hear what others have to say about us</p>
        <div className='flex flex-col md:flex-row md:space-x-12 md:items-center'>
            {testimonial.map((item)  => {
                return <div className='flex flex-col md:w-1/2 mt-5 md:mt-0'>
                    <div className='flex items-center gap-2 mt-5'>
                        <IoStar className="text-yellow" size={24} />
                        <IoStar className="text-yellow" size={24} />
                        <IoStar className="text-yellow" size={24} />
                        <IoStar className="text-yellow" size={24} />
                        <IoStar className="text-yellow" size={24} />
                    </div>
                    <h4 className='text-lg md:text-xl font-semibold mt-5'>The organization has truly changed my mind,I am forever grateful.</h4>
                    <div className='flex items-center gap-2 mt-5'>
                        <img src={item.image1} alt="" />
                        <div>
                            <h6 className='text-lg md:text-xl font-normal'>{item.name}</h6>
                            <p className='text-sm md:text-base font-light'>{item.role}</p>
                        </div>
                        <div className='w-[1px] h-14 bg-black'></div>
                        <p className='text-lg md:text-xl font-semibold'>{item.place}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Testimonial

