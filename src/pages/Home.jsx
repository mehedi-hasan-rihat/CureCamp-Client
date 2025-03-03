import Hero from '../component/Home/Hero'
import PopularCamp from '../component/Home/PopularCamp'
import Review from '../component/Home/Review'
import FAQ from '../component/Home/FAQ'
import { Helmet } from 'react-helmet-async';
export default function Home() {
  return (
   <div className="pb-5 lg:pb-10 xl:pb-40">
    <Helmet>  <title>Cure Camp | Home</title></Helmet>
     <Hero/>
     <PopularCamp/>
     <Review/>
     <FAQ/>
   </div>
  )
}
