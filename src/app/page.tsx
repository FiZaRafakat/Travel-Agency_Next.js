"use client"
import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Secondpage from './components/Secondpage'
import Deals from './components/Deals'
import VacationPlan from './components/VacationPlan'
import CustomerReview from './components/CustomerReview'
import Blogs from './components/Blogs'
import Subscriber from './components/Subscriber'
import Footer from './components/Footer'
import AOS from "aos"
import "aos/dist/aos.css"

const page = () => {
  useEffect(()=>{
  AOS.init({
     easing : "ease-out-back",
     duration : 1200,
     delay : 100 ,
     mirror : true ,
     anchorPlacement : "bottom-bottom",
     offset : 160,
  }) ;
  AOS.refresh()
  },[])

  return (
    <main className='bg-[#fBf7ee] '>
      <Navbar/>
      <Hero />
      <Secondpage />
      <Deals/>
      <VacationPlan />
      <CustomerReview />
      <Blogs />
      <Subscriber />
      <Footer/>
    </main>
  )
}

export default page
