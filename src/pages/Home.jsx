import React from 'react'
import Hero from '../component/Home/Hero'
import PopularCamp from '../component/Home/PopularCamp'
import Review from '../component/Home/Review'
export default function Home() {
  return (
   <div className="pb-40">
     <Hero/>
     <PopularCamp/>
     <Review/>
   </div>
  )
}
