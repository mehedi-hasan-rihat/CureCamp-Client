import React from "react";
import AvailableCamp from "../component/AvailableCamp/AvailableCamp";
import Container from "../component/sharedComponent/Container";
import { Helmet } from 'react-helmet-async';

export default function () {
  return (
    <Container> <Helmet>  <title>Cure Camp | Available Camp</title></Helmet>
      {" "}
      <div className=" py-20">
        <AvailableCamp />
      </div>
    </Container>
  );
}
