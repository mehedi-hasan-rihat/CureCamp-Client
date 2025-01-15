import React, { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import Container from "../sharedComponent/Container";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";

export default function PopularCamp() {
  const axiosPublic = useAxiosPublic();
  const {user } = useAuth();
  const [popularCampain, setPopularCampain] = useState([]);

  useEffect(() => {
    if(user){
      axiosPublic("/popular-campain")
      .then((res) => {
        console.log(res.data);
        setPopularCampain(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, [user]);
  
  
  return (
    <Container>
      <div className="mt-20 ">
        <div className="text-center text-4xl font-semibold font-mono mb-10 text-black secondary-font">
          PopularCamp
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {popularCampain.map((campData) => (
            <PopularCard campData={campData} key={campData._id} />
          ))}
        </div>
      </div>
    </Container>
  );
}
