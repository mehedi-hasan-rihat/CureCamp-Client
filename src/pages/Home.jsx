import React from 'react'
import Hero from '../component/Home/Hero'
import PopularCamp from '../component/Home/PopularCamp'
import Review from '../component/Home/Review'
import FAQ from '../component/Home/FAQ'
export default function Home() {
  return (
   <div className="pb-40">
     <Hero/>
     <PopularCamp/>
     <Review/>
     <FAQ/>
   </div>
  )
}
