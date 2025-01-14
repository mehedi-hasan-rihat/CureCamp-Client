import React from "react";
import PopularCard from "./PopularCard";
import Container from "../sharedComponent/Container";

export default function PopularCamp() {
  return (
    <Container className='mt-40 '>
      <div className="mt-20">
        <div className="text-center text-2xl font-bold text-black secondary-font">PopularCamp</div>

        <div className="grid grid-cols-3 gap-3">
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </div>
      </div>
    </Container>
  );
}
