import React from 'react'
import { contactDetails } from '../data'

const Contact = () => {
  return (
    <div className='md:px-14 font-poppins -mt-6 mb-5 md:mb-6 md:mt-20 text-black' id='contact'>
        <div className='flex flex-col md:flex-row md:space-x-10 md:items-center'>
            {contactDetails.map((item) => {
                return <div className='flex flex-col md:w-1/3 mt-6 md:mt-0'>
                            <img src={item.image} alt="" className='w-4' />
                            <h4 className='text-xl md:text-2xl font-semibold mt-2.5'>{item.section}</h4>
                            <h6 className='text-sm md:text-base font-light mt-2.5'>{item.description}</h6>
                            <p className='text-sm md:text-base font-normal mt-2.5'>{item.order}</p>
                        </div>
            })}
        </div>
    </div>
  )
}

export default Contact
