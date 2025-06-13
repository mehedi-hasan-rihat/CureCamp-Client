import React, { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import Container from "../sharedComponent/Container";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function PopularCamp() {
  const axiosPublic = useAxiosPublic();
  const [popularCampain, setPopularCampain] = useState([]);

  useEffect(() => {
  
      axiosPublic("/popular-campain")
      .then((res) => {
        console.log(res.data);
        setPopularCampain(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, []);
  
  
  return (
    <Container>
      <div className="mt-10 md:mt-20 ">
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto my-5 text-center md:my-10">
            <h3 className="text-2xl font-semibold md:text-3xl secondary-font">
              Hear From Our Happy Campers
            </h3>
            <p className="mt-px text-xs font-medium md:mt-2 md:text-base ">
              Discover what makes Madi Camp special through the words of our
              visitors. From serene landscapes to unforgettable adventures, our
              campers share their stories of joy and relaxation. Join the
              journey and create your own magical memories!
            </p>
          </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popularCampain.map((campData) => (
            <PopularCard campData={campData} key={campData._id} />
          ))}
        </div>
      </div>

    <Link to={'/available-campain'} className="block w-full mt-10 text-center">  <Button className='text-white'>See all Camp</Button></Link>
    </Container>
  );
}
