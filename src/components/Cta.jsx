import React from 'react'
import Button from '../elements/Button'

const Cta = () => {
  return (
    <div className='md:px-14 font-poppins mb-16 md:my-20 text-black'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
            <div>
                <h2 className='text-3xl md:text-4xl font-semibold'>Join Us in Making a Difference</h2>
                <p className='text-base md:text-lg font-light mt-2.5'>Help us bring hope to those in need</p>
            </div>
            <div className='md:flex items-center md:gap-6 mt-2.5 md:mt-0'>
                <Button children='Get Involved' className='text-black font-medium px-2 md:px-6 mr-2' />
                <Button children='Donate' className='bg-black text-white font-normal px-2 md:px-6' />
            </div>
        </div>
    </div>
  )
}

export default Cta
