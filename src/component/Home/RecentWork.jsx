import React from "react";
import Container from "../sharedComponent/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function RecentWork() {
  return (
    <Container>
      <div className="mx-auto container my-36  text-center">
        <h3 className="text-4xl font-semibold mb-10">Our Recents Medical Camps Overview</h3>
        <Carousel className="w-full h-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 py-2 lg:basis-1/3 h-full"
              >
                <div className=" h-80  rounded w-full ">
                  <img
                    src="https://img.freepik.com/free-photo/closeup-shot-boy-getting-checkup_181624-44697.jpg?uid=R122104271&ga=GA1.1.801849051.1739277940&semt=ais_hybrid"
                    className="text-3xl font-semibold h-full flex items-center justify-center w-full object-cover object-center rounded"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Container>
  );
}
