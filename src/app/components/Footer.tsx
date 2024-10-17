import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { CiInstagram } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
        <div className='bg-[#f7f8fc] lg:px-40 md:px-16 md:pt-32 pt-16 px-3 '>
   <div className="footer flex justify-between mb-8 md:gap-8 gap-4 flex-col sm:flex-row">
    <div className="contact flex flex-col max-w-[14rem] pb-7">
    <div className="bg-[url(images/Logo.png)] h-[25px] w-[130px] bg-contain bg-no-repeat mb-5" > 
    </div>
    <p className='text-[#444444] sm:text-base text-sm sm:leading-8 tracking-wide mb-4'>
        Book your trip in minute, get full 
        Control for much longer.
    </p>
    <div className='flex gap-5'>
      <p className=' sm:p-3 p-2 rounded-full bg-white text-[#444444] drop-shadow-sm transition-all delay-150 ease-linear hover:drop-shadow-lg' data-aos="zoom-in"><GrFacebookOption size={25}/></p>
      <p className='sm:p-3 p-2 rounded-full bg-[#fa7436] text-white drop-shadow-sm transition-all delay-150 ease-linear hover:drop-shadow-lg' data-aos="zoom-in"><CiInstagram size={25} /></p>
      <p className='sm:p-3 p-2 rounded-full bg-white text-[#444444] drop-shadow-sm transition-all delay-150 ease-linear hover:drop-shadow-lg' data-aos="zoom-in"><IoLogoTwitter size={25} /></p>
    </div>
    </div>
    <div className="links flex lg:gap-36 md:gap-16 sm:gap-8 gap-8 justify-around">
       <div className="company">
        <h3 className='font-bold sm:text-xl mb-6 text-base hover:border-b-4 hover:border-[#fa7436] pb-2'>Company</h3>
        <ul>
            <li  className='text-[#666666] sm:text-base text-sm mb-2 sm:mb-4'>About</li>
            <li className='text-[#666666] sm:text-base text-sm mb-2 sm:mb-4'>Careers</li>
            <li className='text-[#666666] sm:text-base text-sm mb-2 sm:mb-4'>Logistic</li>
            <li className='text-[#666666] sm:text-base text-sm mb-2 sm:mb-4'>Privacy & Policy</li>
        </ul>
       </div>
       <div className="company">
        <h3 className='font-bold sm:text-xl mb-6 text-base hover:border-b-4 hover:border-[#fa7436] pb-2'>Contact</h3>
        <ul>
            <li className='text-[#666666] sm:text-base text-sm mb-2 sm:mb-4'>Help/FAQ</li>
            <li className='text-[#666666] sm:text-base text-sm mb-2 sm:mb-4'>Press</li>
            <li className='text-[#666666] sm:text-base text-sm mb-2 sm:mb-4'>Affilates</li>
        </ul>
       </div>
       <div className="company">
        <h3 className='font-bold sm:text-xl mb-6 text-base hover:border-b-4 hover:border-[#fa7436] pb-2'>More</h3>
        <ul>
            <li className='text-[#666666] sm:text-base text-sm mb-2 sm:mb-4'>Press Centre</li>
            <li className='text-[#666666] sm:text-base text-sm mb-2 sm:mb-4'>Our Blog</li>
            <li className='text-[#666666] sm:text-base text-sm mb-2 sm:mb-4'>Low fare tips</li>
        </ul>
       </div>
    </div>
   </div>

   <div className="text-[#666666] border-t  border-[#999999] text-[0.5rem] sm:text-sm flex justify-between md:pt-10 pt-4 pb-7">
    <p>Copyright, Trabook 2022, All rights reserved.</p>
    <p>Terms & Conditions</p>
   </div>
   </div>
   
  )
}

export default Footer