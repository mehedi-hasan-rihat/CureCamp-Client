import React from "react";
import PopularCard from "./PopularCard";
import Container from "../sharedComponent/Container";

export default function PopularCamp() {
  return (
    <Container >
      <div className="mt-20 ">
        <div className="text-center text-4xl font-semibold font-mono mb-10 text-black secondary-font">PopularCamp</div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
