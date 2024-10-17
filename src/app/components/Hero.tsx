import React from "react";

const Hero = () => {
  return (
    <div className="xl:px-32 flex flex-col items-center">
      <div className="hero flex justify-between lg:pl-24 pl-10 sm:flex-row flex-col ">
        <div className="card1 sm:w-2/5 my-6 w-6/7 mr-4" data-aos="fade-right">
        <h1 className="md:text-5xl font-[poppins] font-bold mb-4 sm:mb-7 text-4xl text-[#222222]">Get started your exciting <span className="text-[#fa7436]">journey</span> with us.</h1>
        <p className="text-[#666666] text-sm sm:text-base leading-6 sm:leading-8 tracking-wide">A Team of experience tourism professionals will provide you with the best advice and tips for your desire place. </p>
        <button className="border border-[#fa7436] text-[#fa7436] sm:mt-10 mt-5 lg:px-6 lg:py-3 py-1 sm:py-2 px-3  rounded hover:bg-[#fa7436] hover:text-white transition-all delay-150 ease-linear">Discover Now</button>
        </div>
        <div className="card2 md:w-3/5 bg-[url(images/image1.png)] bg-contain bg-no-repeat sm:w-[25rem] sm:mt-10 min-[422px]:h-[25rem] min-[350px]:h-[20rem] h-[15rem]" data-aos="fade-left">
        </div>
      </div>

      <div className="bg-white flex sm:gap-10 gap-3 justify-around  lg:mx-36 py-5 mt-4 rounded-lg mb-10 md:w-[750px] md:mt-2 sm:text-base text-xs max-[430px]:flex-wrap px-3" >
       <div className="select">
       <select className="font-bold ">
        <option className="text-[#222222]">Location</option>
       </select>
       <p className="mt-2 text-[#666666]">Where are you going</p>
       </div>
       <div className="select">
       <select className="font-bold">
        <option value="" className="text-[#222222]">Date</option>
       </select>
       <p className="mt-2 text-[#666666]">When will you go</p>
       </div>
       <div className="select">
       <select className="font-bold">
        <option value="" className="text-[#222222]">Guest</option>
       </select>
       <p className="mt-2 text-[#666666]">Number of guest</p>
       </div>
       <button className="bg-[#fa7436] text-white py-0 lg:px-6 md:px-4 sm:px-3 text-sm rounded transition-all delay-150 ease-linear border hover:border-[#fa7436] hover:bg-inherit hover:text-[#fa7436] px-1
        max-[430px]:px-2  max-[430px]:py-2">Explore now</button>
      </div>
    </div>
  );
};

export default Hero;
