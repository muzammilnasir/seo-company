import React from 'react'
import iphone from "../assets/iphone.png";

function Header() {
  return (
    <>
    <div className='mt-[30px] py-[30px] flex items-center justify-center bg-[#f6f8f9] min-h-[100vh]' id='home'>
        <div className='pt-[100px] flex md:items-center gap-[20px] justify-around bg-[blac] flex-col md:flex-row w-[1200px] py-[30px]'>
        <div className='w-[100%] sm:w-[300px] m-auto md:m-[0px]'>
            <img src={iphone} className='w-[100%] h-[100%] object-contain shadow-2xl' alt="img" />
        </div>
        <div className='md:w-[420px] lg:w-[620px] px-[20px] md:px-[0px]'>
            <p className='text-[#0095f7]'>UNLIMITED DATA</p>
            <h1 className='text-[#3a3f52] text-[23px] md:text-[2rem] lg:text-[3rem]'>Digital Innovation and the</h1>
            <h1 className='text-[#3a3f52] text-[23px] md:text-[2rem] lg:text-[3rem] font-bold'>Future of Digital Marketing</h1>
            <p className='text-[#8da2b5] md:text-[18px] lg:text-[24px] font-[300]'>Boost your digital marketing campaigns and increase your conversion rates</p>
            <a href="#" className='bg-[#0095f7] text-white py-[6px] px-[15px] md:py-3 md:px-6 block w-fit mt-[20px] rounded-md'>Learn more</a>
        </div>
        </div>
    </div>
    </>
  )
}

export default Header