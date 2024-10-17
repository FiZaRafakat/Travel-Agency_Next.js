import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const CustomerReview = () => {
  return (
    <div className='bg-[#f7f8fc] lg:px-36  px-8  pb-40'>
    <div className='flex  pt-3 flex-wrap md:flex-nowrap justify-center items-center'>
        <div className="left md:w-1/2 mr-10 max-w-[400px] " data-aos="zoom-in-right"  >
          <h2 className='sm:text-5xl text-4xl font-bold font-[poppins] mb-5 lg:mt-40'>What people say <span className='text-[#fa7436]'>about us.</span></h2>
          <p className='text-[#444444] leading-8 tracking-wide sm:text-base text-sm'>Our Clients send us bunch of smilies with our services and we love them. </p>
          <div className="buttons mb-20 flex mt-5 items-center gap-8 max-[430px]:gap-5">
        <button className='border rounded-full p-3 max-[430px]:p-2 border-[#666666]'><FaArrowLeftLong size={23} className='text-[#666666]' /></button>
        <button className='border rounded-full p-3 max-[430px]:p-2 bg-[#fa7436]'><FaArrowRightLong size={23} className='text-white' /></button>
       </div>
        </div>
        <div className="right md:w-1/2 flex relative justify-center items-center md:mt-20 mt-3 " >
           <div className="card">
           <div className="card1 md:w-[300px] lg:w-[460px] w-[470px] max-[570px]:w-[320px] max-[420px]:w-[250px] max-[420px]:text-xs bg-white rounded-2xl relative z-30 drop-shadow-md hover:drop-shadow-lg  max-[330px]:w-[200px]  " data-aos="zoom-in-left">
            <div className='bg-[url(images/Image9.png)] bg-contain bg-no-repeat h-20 w-20 max-[420px]:h-16 absolute -top-10 -left-10   drop-shadow-sm hover:drop-shadow-md '></div>
            <div className='p-8 lg:pr-14 max-[420px]:p-3 max-[420px]:pt-10 '>
                <p className='text-[#444444] leading-8 tracking-wide mb-7 max-[420px]:leading-5 '>"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as next time. Of believed or diverted no." </p>
                <h2 className='text-lg font-bold'>Mike taylor</h2>
                <p className='text-[#444444] leading-8 tracking-wide text-sm'>Lahore,Pakistan</p>
            </div>
           </div>
          <div className="card2  lg:w-[460px] md:w-[320px] w-[470px] max-[570px]:w-[310px] max-[420px]:w-[230px] rounded-2xl border-2  bg-inherit flex items-end absolute -bottom-20 max-[330px]:left-5  left-12 z-10 max-[420px]:text-xs max-[330px]:w-[200px]  " data-aos="zoom-in-left">
          <div className='p-8 lg:pr-14 max-[420px]:p-3 pb-3 opacity-55'>
                <p className='text-[#444444] leading-8 tracking-wide mb-7 max-[420px]:leading-5 '>"Upon painted fields, silent parties move with time’s soft grace. Past and future merge in uncertain steps. Belief sways as paths diverge, yet onward we drift, seeking the unseen." </p>
                <h2 className='text-lg text-[#444444] font-bold'>Chris Thomas</h2>
                <p className='text-[#444444] leading-8 tracking-wide text-sm'>CEO Of Red Button</p>
            </div>
            
          </div>
           </div>
        </div>

    </div>
    </div>
  )
}
export default CustomerReview
// <div className="bg-[url(images/Element4.png)] bg-contain bg-no-repeat h-[150px] w-[150px]">
// </div>