import React from 'react'
import { FaLocationDot } from "react-icons/fa6";;
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
const Deals = () => {
  return (
    <div className='lg:px-40 md:px-20 mt-24 px-8'>
        <div className="heading text-center flex flex-col justify-center items-center">
            <h2 className='md:text-5xl font-[poppins] font-bold mb-3 text-4xl text-[#222222]'>Exclusive <span className='text-[#fa7436]' >deals & discounts</span></h2>
            <p className='text-[#666666] leading-8 tracking-wide max-w-[25rem] sm:text-base text-sm'>Discover our fantastic early booking discounts
            & start planning your journey.
            </p>
        </div>
        <div className="deals-card flex gap-5 mt-10 mb-10 justify-center flex-wrap">
            <div className="card1 bg-white pb-7 rounded-xl" data-aos="flip-right">
                <div className='bg-[url(images/Image2.png)] bg-contain bg-no-repeat h-[250px] w-[220px] hover:brightness-75'></div>
              <div className='px-3'>
              <div className="text flex justify-between mt-3 ">
                    <h1 className='font-bold text-lg text-[#222222]'>Madrid</h1>
                    <div className='flex gap-2 items-center'><p><FaStar className='text-yellow-400'/></p> <p className='text-[#666666]'>4.8</p></div>
                </div>
                <div className="location flex text-[#666666] mt-3 justify-between items-center" >
                    <div className='flex items-center gap-2'>
                    <p><FaLocationDot size={18}/></p>
                    <p>Spain</p>
                    </div>
                    <div className='flex gap-3 font-bold '><del className='py-1'>$950</del><ins className='text-[#fa7436] py-1 px-2 bg-[#fa7436] bg-opacity-15 rounded'>$850</ins></div>
                </div>
              </div>
            </div>
            <div className="card2 bg-white pb-7 rounded-xl" data-aos="flip-right">
                <div className='bg-[url(images/italy-pic.jpg)] bg-contain bg-no-repeat h-[250px] w-[235px] rounded-lg hover:brightness-75'></div>
              <div className='px-3'>
              <div className="text flex justify-between mt-3 ">
                    <h1 className='font-bold text-lg text-[#222222]'>Firenze</h1>
                    <div className='flex gap-2 items-center'><p><FaStar className='text-yellow-400'/></p> <p className='text-[#666666]'>4.5</p></div>
                </div>
                <div className="location flex text-[#666666] mt-3 justify-between items-center" >
                   <div className='flex items-center gap-2'>
                    <p><FaLocationDot size={18}/></p>
                    <p>Italy</p>
                    </div>
                    <div className='flex gap-3 font-bold '><del className='py-1'>$850</del><ins className='text-[#fa7436] py-1 px-2 bg-[#fa7436] bg-opacity-15 rounded'>$750</ins></div>
                </div>
              </div>
            </div>
            <div className="card3 bg-white pb-7 rounded-xl" data-aos="flip-right">
                <div className='bg-[url(images/Image3.png)] bg-contain bg-no-repeat h-[250px] w-[220px] hover:brightness-75'></div>
              <div className='px-3'>
              <div className="text flex justify-between mt-3 ">
                    <h1 className='font-bold text-lg text-[#222222]'>Paris</h1>
                    <div className='flex gap-2 items-center'><p><FaStar className='text-yellow-400'/></p> <p className='text-[#666666]'>4.4</p></div>
                </div>
                <div className="location flex text-[#666666] mt-3 justify-between items-center" >
                <div className='flex items-center gap-2'>
                    <p><FaLocationDot size={18}/></p>
                    <p>France</p>
                    </div>
                    <div className='flex gap-3 font-bold '><del className='py-1'>$699</del><ins className='text-[#fa7436] py-1 px-2 bg-[#fa7436] bg-opacity-15 rounded'>$599</ins></div>
                </div>
              </div>
            </div>
            <div className="card4 bg-white pb-7 rounded-xl" data-aos="flip-right">
                <div className='bg-[url(images/Image4.png)] bg-contain bg-no-repeat h-[250px] w-[220px] hover:brightness-75'></div>
              <div className='px-3'>
              <div className="text flex justify-between mt-3 ">
                    <h1 className='font-bold text-lg text-[#222222]'>London</h1>
                    <div className='flex gap-2 items-center'><p><FaStar className='text-yellow-400'/></p> <p className='text-[#666666]'>4.8</p></div>
                </div>
                <div className="location flex text-[#666666] mt-3 justify-between items-center" >
                <div className='flex items-center gap-2'>
                    <p><FaLocationDot size={18}/></p>
                    <p>UK</p>
                    </div>
                    <div className='flex gap-3 font-bold '><del className='py-1'>$950</del><ins className='text-[#fa7436] py-1 px-2 bg-[#fa7436] bg-opacity-15 rounded'>$850</ins></div>
                </div>
              </div>
            </div>

        </div>
        <div className="buttons mb-20 flex justify-center items-center gap-8 max-[430px]:gap-5">
        <button className='border rounded-full p-3 max-[430px]:p-2 border-[#666666]'><FaArrowLeftLong size={23} className='text-[#666666]' /></button>
        <button className='border rounded-full p-3 max-[430px]:p-2 bg-[#fa7436]'><FaArrowRightLong size={23} className='text-white' /></button>
       </div>
    </div>
  )
}

export default Deals