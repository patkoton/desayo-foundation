import React from 'react'
import { Link } from 'react-router-dom'
import { MdMailOutline } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='md:px-14 font-poppins -mt-6 mb-5 md:mb-6 md:mt-20 text-black' id='contact'>
        <div className='flex flex-col md:flex-row md:space-x-10 md:items-center'>
          <div className='flex flex-col md:w-1/3 mt-6 md:mt-0'>
            <MdMailOutline size={24} />
            <h4 className='text-xl md:text-2xl font-semibold mt-2.5'>Email</h4>
            <h6 className='text-sm md:text-base font-light mt-2.5'>Feel free to reach out to us for more details or support</h6>
            <Link to='mailto:hello@faithbasedngo?body=Hello!' className='text-sm md:text-base font-normal mt-2.5'>hello@faithbasedngo</Link>
          </div>
          <div className='flex flex-col md:w-1/3 mt-6 md:mt-0'>
            <IoCallOutline size={24} />
            <h4 className='text-xl md:text-2xl font-semibold mt-2.5'>Phone</h4>
            <h6 className='text-sm md:text-base font-light mt-2.5'>You can also give us a call, if you have questions</h6>
            <p className='text-sm md:text-base font-normal mt-2.5'>+2347863769438</p>
          </div>
          <div className='flex flex-col md:w-1/3 mt-6 md:mt-0'>
            <IoLocationOutline size={24} />
            <h4 className='text-xl md:text-2xl font-semibold mt-2.5'>Office</h4>
            <h6 className='text-sm md:text-base font-light mt-2.5'>Visit our office during business hours.</h6>
            <p className='text-sm md:text-base font-normal mt-2.5'>Plot 34, Falana drive, Ondo State</p>
          </div>
        </div>
    </div>
  )
}

export default Contact
