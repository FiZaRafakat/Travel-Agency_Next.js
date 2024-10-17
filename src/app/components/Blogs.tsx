import React from 'react'



const Blogs = () => {
  return (
    <div className='lg:px-40 md:px-16 px-8 max-[549px]:px-3 mb-40 ' >
        <h2 className='sm:text-5xl text-4xl font-bold font-[poppins] text-center mt-28 max-[549px]:mt-10'>Get update with <span className='text-[#fa7436]'>latest blog</span></h2>
        <div className="cards flex mt-16 justify-around gap-6 flex-wrap max-[549px]:gap-3">
            <div className="card1 flex flex-col w-[230px] max-[549px]:w-[130px] " data-aos="flip-right">
                <div className='bg-[url(images/Image10.png)] bg-contain bg-no-repeat h-[240px] w-[230px] hover:brightness-125 max-[549px]:w-[130px] max-[549px]:h-[135px]'></div>
                <div className="text">
                    <h5 className='mt-4 font-semibold max-[549px]:text-sm'>The Amazing Difference a Year of Travelling.</h5>
                    <p className='text-[#666666] max-[549px]:mt-2 mt-4 max-[549px]:text-sm'>July 27, 2021</p>
                </div>
            </div>
            <div className="card2 flex flex-col w-[230px] max-[549px]:w-[130px]" data-aos="flip-right">
                <div className='bg-[url(images/Image11.png)] bg-contain bg-no-repeat h-[240px] w-[230px] max-[549px]:w-[130px] max-[549px]:h-[135px] hover:brightness-125'></div>
                <div className="text">
                    <h5 className='mt-4 font-semibold max-[549px]:text-sm'>Travel far enough, you meet yourself.</h5>
                    <p className='text-[#666666] max-[549px]:mt-2 mt-4 max-[549px]:text-sm'>July 27, 2021</p>
                </div>
            </div>
            <div className="card3 flex flex-col w-[230px] max-[549px]:w-[130px]" data-aos="flip-right">
                <div className='bg-[url(images/Image12.png)] bg-contain bg-no-repeat h-[240px] w-[230px] hover:brightness-125 max-[549px]:w-[130px] max-[549px]:h-[135px]'></div>
                <div className="text">
                    <h5 className='mt-4 font-semibold max-[549px]:text-sm'>How to Save Money While Visiting America.</h5>
                    <p className='text-[#666666] mt-4 max-[549px]:mt-2 max-[549px]:text-sm'>July 27, 2021</p>
                </div>
            </div>
            <div className="card4 flex flex-col w-[230px] max-[549px]:w-[130px]" data-aos="flip-right">
                <div className='bg-[url(images/Image13.png)] bg-contain bg-no-repeat h-[240px] w-[230px] hover:brightness-125 max-[549px]:w-[130px] max-[549px]:h-[135px]'></div>
                <div className="text">
                    <h5 className='mt-4 font-semibold max-[549px]:text-sm'>Reflections on 5 Months of Travel: Time to Hang</h5>
                    <p className='text-[#666666] mt-4 max-[549px]:mt-2 max-[549px]:text-sm'>July 27, 2021</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs