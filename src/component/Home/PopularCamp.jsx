import React, { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import Container from "../sharedComponent/Container";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function PopularCamp() {
  const axiosPublic = useAxiosPublic();
  const {user } = useAuth();
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
      <div className=" flex flex-col items-center justify-center text-center max-w-2xl mx-auto my-5 md:my-10">
            <h3 className="text-2xl md:text-3xl font-semibold secondary-font">
              Hear From Our Happy Campers
            </h3>
            <p className="mt-px md:mt-2 text-xs md:text-base font-medium ">
              Discover what makes Madi Camp special through the words of our
              visitors. From serene landscapes to unforgettable adventures, our
              campers share their stories of joy and relaxation. Join the
              journey and create your own magical memories!
            </p>
          </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {popularCampain.map((campData) => (
            <PopularCard campData={campData} key={campData._id} />
          ))}
        </div>
      </div>

    <Link to={'/available-campain'} className="w-full block text-center mt-10">  <Button className='text-white'>See all Camp</Button></Link>
    </Container>
  );
}
