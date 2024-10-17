import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className=' mb-5 lg:px-20 md:px-8 xl:px-40 px-5 '>
    <div className='mt-5 flex md:justify-around items-center justify-between' data-aos="fade-down">
    <div className='flex'>
    <div className="bg-[url(images/Logo.png)] h-[25px] w-[150px] bg-contain bg-no-repeat"> 
    </div>
    </div>
    <div className="nav cursor-pointer hidden md:block lg:block">
    <li className='inline hover:border-y-2 hover:border-[#fa7436] hover:py-2 hover:text-[#fa7436]'>Home</li>
    <li className='inline lg:ml-10 md:ml-5 hover:border-y-2 hover:border-[#fa7436] hover:py-2 hover:text-[#fa7436]'>About</li>
    <li className='inline lg:ml-10 md:ml-5 hover:border-y-2 hover:border-[#fa7436] hover:py-2 hover:text-[#fa7436]'>Destination</li>
    <li className='inline lg:ml-10 md:ml-5 hover:border-y-2 hover:border-[#fa7436] hover:py-2 hover:text-[#fa7436]'>Tour</li>
    <li className='inline lg:ml-10 md:ml-5 hover:border-y-2 hover:border-[#fa7436] hover:py-2 hover:text-[#fa7436]'>Blog</li>
    </div>
    <div className='flex gap-8 items-center'>
    <div className="login sm:block hidden">
      <button className='inline text-[#fa7436] lg:px-6 px-5 py-1 hover:rounded lg:py-2 transition-all delay-150 ease-linear hover:border hover:border-[#fa7436] '>Login</button>
      <button className='lg:ml-5 ml-2 inline bg-[#fa7436] text-white lg:px-10 px-5 lg:py-2 py-1 rounded transition-all delay-150 ease-linear border hover:border-[#fa7436] hover:bg-inherit hover:text-[#fa7436] '>Sign up</button>
    </div>
    <div className='text-white bg-[#fa7436] py-1 px-4 rounded-xl md:hidden sm:block transition-all delay-150 ease-linear hover:border hover:border-[#fa7436] hover:text-[#fa7436] hover:bg-inherit '>
    <GiHamburgerMenu size={20} />
    </div>
    </div>
    </div>
    </nav>
  )
}

export default Navbar



