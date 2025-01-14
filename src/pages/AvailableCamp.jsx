import React from "react";
import AvailableCamp from "../component/AvailableCamp/AvailableCamp";
import Container from "../component/sharedComponent/Container";

export default function () {
  return (
    <Container>
      {" "}
      <div className="min-h-[80vh] py-20">
        <AvailableCamp />
      </div>
    </Container>
  );
}
