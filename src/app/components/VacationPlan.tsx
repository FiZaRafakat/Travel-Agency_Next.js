import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const VacationPlan = () => {
  return (
    <div className=' lg:px-40 md:px-16 px-6 pb-20'>
        <div className="head flex justify-center items-center pt-[3rem] pb-2 flex-wrap-reverse">
            <div className="text text-center">
            <h1 className='text-5xl font-[poppins] font-bold mb-4'>Best <span className='text-[#fa7436]'>vacation plan</span></h1>
            <p className='text-[#666666] leading-8 tracking-wide sm:text-base text-sm'>Plan your perfect vacation with our travel agency. Choose 
                 among hundreds of all-inclusive offers!</p>
            </div>
            <div className='bg-[url(images/Element2.png)] bg-contain bg-no-repeat h-32 w-32 ml-10' data-aos="zoom-in" ></div>
        </div>
        <div className="cards">
        <div className="buttons mb-20 flex justify-end items-center gap-8 max-[430px]:gap-5">
        <button className='border rounded-full p-3 max-[430px]:p-2 border-[#666666]'><FaArrowLeftLong size={23} className='text-[#666666]' /></button>
        <button className='border rounded-full p-3 max-[430px]:p-2 bg-[#fa7436]'><FaArrowRightLong size={23} className='text-white' /></button>
       </div>
       <div className="card flex sm:justify-around justify-center gap-7 flex-wrap items-center">
       <div className="card1 bg-white rounded-xl"  data-aos="flip-left">
        <div className='bg-[url(images/image-5.png)] bg-contain bg-no-repeat h-[290px] w-[300px] hover:contrast-150 max-[320px]:w-[250px] max-[320px]:h-[240px] '></div>
        <div className="title px-4 pb-3 pt-2">
            <div className="text font-bold flex justify-between text-lg pb-2">
                <p >Rome, Italy</p>
                <p className='text-[#fa7436]'>$5,42K</p>
            </div>
            <div className="sec flex justify-between">
                <div className="trip flex items-center">
                    <p className='mr-3 text-[#fa7436]'><FaLocationArrow /></p>
                    <p className='text-sm text-[#666666]'>10 Days Trip</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <p><FaStar className='text-yellow-400'/></p>
                     <p className='text-[#666666]'>4.8</p>
               </div>
            </div>
        </div>
       </div>
       <div className="card2 bg-white rounded-xl"  data-aos="flip-left">
        <div className='bg-[url(images/Image6.png)] bg-contain bg-no-repeat h-[290px] w-[300px] hover:contrast-150 max-[320px]:w-[250px] max-[320px]:h-[240px]'></div>
        <div className="title px-4 pb-3 pt-2">
            <div className="text font-bold flex justify-between text-lg pb-2">
                <p >London, UK</p>
                <p className='text-[#fa7436]'>$2,42K</p>
            </div>
            <div className="sec flex justify-between">
                <div className="trip flex items-center">
                    <p className='mr-3 text-[#fa7436]'><FaLocationArrow /></p>
                    <p className='text-sm text-[#666666]'>07 Days Trip</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <p><FaStar className='text-yellow-400'/></p>
                     <p className='text-[#666666]'>4.7</p>
               </div>
            </div>
        </div>
       </div>
       <div className="card3 bg-white rounded-xl"  data-aos="flip-left">
        <div className='bg-[url(images/Image7.png)] bg-contain bg-no-repeat h-[290px] w-[300px] hover:contrast-150 max-[320px]:w-[250px] max-[320px]:h-[240px]'></div>
        <div className="title px-4 pb-3 pt-2">
            <div className="text font-bold flex justify-between text-lg pb-2">
                <p >Osaka, Japan</p>
                <p className='text-[#fa7436]'>$5,42K</p>
            </div>
            <div className="sec flex justify-between">
                <div className="trip flex items-center">
                    <p className='mr-3 text-[#fa7436]'><FaLocationArrow /></p>
                    <p className='text-sm text-[#666666]'>10 Days Trip</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <p><FaStar className='text-yellow-400'/></p>
                     <p className='text-[#666666]'>4.8</p>
               </div>
            </div>
        </div>
       </div>

       </div>
        </div>
    </div>
  )
}

export default VacationPlan