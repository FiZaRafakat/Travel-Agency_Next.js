import React from 'react'
import { IoMailOutline } from "react-icons/io5";


const Subscriber = () => {
  return (
    <div className='h-[390px] lg:px-40 md:px-20 sm:px-10 px-5 '>

   <div className="subscribe  md:pb-20 sm:pb-16 pb-16 bg-[#fa7436] relative rounded-3xl overflow-hidden ">
      <div className="img flex justify-end">
      <div className='bg-[url(images/Element5.png)] bg-contain bg-no-repeat md:h-[130px] md:w-[140px] sm:w-[100px] sm:h-[90px] h-[50px] w-[70px] inline mt-3 ' data-aos="zoom-in-up"></div>
      </div>
      <div className='flex justify-center '>
      <h3 className='text-white lg:text-5xl font-[poppins] font-bold text-center absolute sm:top-16 top-16 md:text-4xl text-xl sm:text-3xl'>Subscribe and get exclusive
        <br />
         deals & offer</h3>
         <div className='relative'>
         <div className='sm:mt-20 mt-16  md:mt-14 bg-white flex md:h-20 sm:h-16 h-10 items-center sm:justify-between md:w-[600px]  sm:w-[500px] rounded-xl z-50 relative hover:drop-shadow-md hover:border-4 hover:border-[#efefef] transition-all delay-150 ease-linear w-[250px] sm:flex-row flex-col gap-6 sm:gap-0 '>
            <div className='flex pl-5 items-center justify-center'>
            <IoMailOutline size={24} className='text-[#999999] '/>
            <input type="email"placeholder='Enter your mail' className='ml-2 md:text-lg outline-none text-[#999999]  sm:text-base text-sm'/>
            </div>
         <button className='text-white bg-[#fa7436] mr-3 md:p-3 md:px-7 rounded-md transition-all delay-150 ease-linear border hover:border-[#fa7436] hover:bg-inherit hover:text-[#fa7436] sm:px-3 sm:py-2 py-1 px-2'>Subscribe</button>
         </div>
         <div className='bg-[url(images/Group42.png)] bg-cover bg-no-repeat md:h-[350px] md:w-[350px] w-[300px] h-[230px] absolute top-2 -left-52 z-10  ' data-aos="zoom-in-up"></div>
         </div>
      </div>
      
   </div>
    </div>
  )
}

export default Subscriber

// absolute -bottom-24 z-10