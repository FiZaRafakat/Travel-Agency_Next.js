import React from 'react'

const Secondpage = () => {
  return (
    <main className='bg-[#f7f8fc] lg:px-30 md:px-10 px-8 pb-16'>
       <div className="pt-20  flex text-center justify-center items-center flex-wrap-reverse ">
       <div className="heading sm:mr-10">
       <h1 className='text-4xl font-bold font-[poppins] mb-5'>Things you need <span className='text-[#fa7436]'>to do</span></h1>
        <p className='text-[#666666] leading-8 tracking-wide max-w-[27rem] sm:text-base text-sm'>We ensure that you&#39;ll embark on a perfectly planned, 
            safe vacation at a price you can afford.
        </p>
       </div  >
       <div className='bg-[url(images/Element.png)] bg-contain bg-no-repeat h-[130px] w-[140px]'data-aos="zoom-in"></div>
       </div>
       <div className="cards flex  gap-5 flex-wrap mt-10 justify-center items-center text-sm">
        <div className="card1 max-w-[20rem] rounded-2xl bg-white p-8 bg-[url(images/vector.png)] bg-contain bg-no-repeat h-full drop-shadow-md hover:drop-shadow-2xl" data-aos="flip-left">
            <div className='bg-[url(images/Group.png)] bg-contain bg-no-repeat h-[40px] w-[40px] mb-10'></div>
            <div>
                <h2 className='text-xl font-bold mb-3 '>Sign Up</h2>
                <p className='text-[#666666] leading-8 tracking-wide'>Complete all the work associated with planning and processing</p>
            </div>
        </div>
        <div className="card2 max-w-[20rem] rounded-2xl bg-white p-8 bg-[url(images/vector2.png)] bg-contain bg-no-repeat drop-shadow-md h-full hover:drop-shadow-2xl" data-aos="flip-left">
            <div className='bg-[url(images/Group1.png)] bg-contain bg-no-repeat h-[40px] w-[40px] mb-10' ></div>
            <div>
                <h2 className='text-lg font-bold mb-3'>Worth of Money</h2>
                <p className='text-[#666666] leading-8 tracking-wide'>After successful access then book from exclusive deals & pricing.</p>
            </div>
        </div>
        <div className="card3 max-w-[20rem] rounded-2xl bg-white p-8 bg-[url(images/vector1.png)] bg-contain bg-no-repeat drop-shadow-md h-full hover:drop-shadow-2xl" data-aos="flip-left">
            <div className='bg-[url(images/Group2.png)] bg-contain bg-no-repeat h-[40px] w-[40px] mb-10' ></div>
            <div>
                <h2 className='text-lg font-bold mb-3'>Exciting Travel</h2>
                <p className='text-[#666666] leading-8 tracking-wide'>Start and explore a wide range of exciting travel experience.</p>
            </div>
        </div>
       </div>
    </main>
  )
}

export default Secondpage