import React from 'react'


const Subscribe = () => {
  return (
    <div className='md:px-14 font-poppins mb-12 md:my-20'>
        <div className='bg-newsImg bg-cover bg-center bg-no-repeat text-white px-5 py-10 md:px-20 md:py-24'>
          <h1 className='text-3xl md:text-4xl font-semibold'>Stay Connected With Our <br /> Newsletter</h1>
          <h6 className='text-base md:text-lg font-light mt-2.5'>Get the latest stories and updates delivered straight to your inbox.</h6>
          <div className='mt-7'>
            <input  type="text" 
                    className="bg-transparent border border-white text-white font-light text-xl placeholder:text-white placeholder:text-xl placeholder:font-light w-full md:w-1/2 p-2.5 outline-none md:mr-2.5"
                    placeholder="Full Name" 
            />
            <button type="submit" 
                    className="cursor-pointer bg-black border border-black outline-none transition-all py-3 px-6 md:px-10 font-normal text-lg md:text-xl text-white mt-2.5 md:mt-0">
                    Subscribe Now
            </button>
          </div>
          <p className='text-sm md:text-base font-normal italic mt-2.5'>By subscribing, you agree to our terms and conditions.</p>
        </div>
    </div>
  )
}

export default Subscribe
