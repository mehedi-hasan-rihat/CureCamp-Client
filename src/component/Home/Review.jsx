import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "../sharedComponent/Container";

export default function Review() {
  return (
    <Container>

        <div className="flex gap-20 h-80 text-center my-20">
          <div className="text-left">
            <h3 className="text-3xl font-semibold secondary-font">Your Feedback, Our Inspiration</h3>
           <p className="text-justify mt-2 font-medium">Hear what others have to say! Our review section showcases genuine feedback from people who have experienced our services. From heartfelt testimonials to constructive insights, these reviews reflect the trust and satisfaction of our valued users. Explore the stories, get inspired, and see how we strive to deliver exceptional experiences every day. Your feedback matters to us!</p>
          </div>
          <Carousel className="w-full max-w-[70%] mx-auto  ">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 h-full"
                >
                  <div className="px-1 h-80">
                    <Card className="h-full">
                      <CardContent className="flex items-center justify-center p-6">
                        <span className="text-2xl font-semibold h-full">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
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
