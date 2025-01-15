import * as React from "react";
import ReactStars from "react-rating-stars-component";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <div className="flex gap-14 h-80 text-center my-20 overflow-hidden">
        <div className="text-left">
          <h3 className="text-3xl font-semibold secondary-font">
            Your Feedback, Our Inspiration
          </h3>
          <p className="text-justify mt-2 font-medium">
            Hear what others have to say! Our review section showcases genuine
            feedback from people who have experienced our services. From
            heartfelt testimonials to constructive insights, these reviews
            reflect the trust and satisfaction of our valued users. Explore the
            stories, get inspired, and see how we strive to deliver exceptional
            experiences every day. Your feedback matters to us!
          </p>
        </div>
        <Carousel className="w-full max-w-[70%] mx-auto  ">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 h-full"
              >
                <div className="px-1 h-80">
                  <Card className="h-full p-4">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg"
                        alt=""
                        className="h-8 w-8 object-center rounded-full"
                      />

                   <div className="">
                   <p className="text-md font-semibold -mb-2">Mehedi Hasan</p>
                   <ReactStars count={5} value={3} size={16} activeColor="#ffd700" />
                   </div>
                    </div>

                    <div className=" text-start mt-5 text-sm">
                      <span className="text-md  h-full">
                        "Hear what others have to say! Our review section
                        showcases genuine feedback from people who have
                        experienced our services. From heartfelt testimonials to
                        constructive insights, these reviews reflect the trust
                        and satisfaction of our valued"
                      </span>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-5" />
          <CarouselNext className="right-5" />
        </Carousel>
      </div>
    </Container>
  );
}
