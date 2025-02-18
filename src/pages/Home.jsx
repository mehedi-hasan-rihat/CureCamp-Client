import React from 'react'
import Hero from '../component/Home/Hero'
import PopularCamp from '../component/Home/PopularCamp'
import Review from '../component/Home/Review'
import FAQ from '../component/Home/FAQ'
import { Helmet } from 'react-helmet-async';
import NewsLetter from '../component/Home/NewsLetter'
import Donation from '../component/Home/Donation'
import RecentWork from '../component/Home/RecentWork'

export default function Home() {
  return (
   <div className="pb-5 lg:pb-10 xl:pb-40">
    <Helmet>  <title>Cure Camp | Home</title></Helmet>
     <Hero/>
     <PopularCamp/>
     <Review/>
     <FAQ/>
     <RecentWork/>
     <Donation/>
     <NewsLetter/>
  
   </div>
  )
}
