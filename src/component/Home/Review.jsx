import { React, useEffect, useState } from "react";
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
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";

export default function Review() {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  useEffect(() => {
 
      axiosPublic("/reviews")
        .then((res) => {
          console.log(res.data);
          setReviews(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    
  }, []);

  return (
    <Container>
      <div className="bg-gradient-to-r from-[#6C63FF] to-[#5954bb] px-4 pt-8 pb-16 md:px-8 md:py-14 rounded-xl my-16 md:my-28">
        <div className="flex flex-col items-center justify-center gap-14 text-center ">
        <div className=" flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <h3 className="text-2xl text-white md:text-3xl font-semibold secondary-font">
              Hear From Our Happy Campers
            </h3>
            <p className="mt-px text-white md:mt-2 text-xs md:text-base font-medium ">
              Discover what makes Madi Camp special through the words of our
              visitors. From serene landscapes to unforgettable adventures, our
              campers share their stories of joy and relaxation. Join the
              journey and create your own magical memories!
            </p>
          </div>
          <Carousel className="w-full sm:max-w-[70%] mx-auto">
            <CarouselContent className="-ml-1">
              {reviews?.map((review) => (
                <CarouselItem
                  key={review?._id}
                  className="pl-1 sm:basis-10/12 md:basis-1/2 xl:basis-1/3 h-full"
                >
                  <div className="px-1 h-52">
                    <Card className="h-full p-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={review?.profile_image}
                          alt="Profile"
                          className="h-8 w-8 object-center rounded-full"
                        />
                        <div>
                          <p className="text-md font-semibold -mb-2">
                            {review?.name}
                          </p>
                          <ReactStars
                            count={5}
                            value={review?.rating}
                            size={16}
                            activeColor="#ffd700"
                          />
                        </div>
                      </div>
                      <div className="text-start mt-5 text-sm">
                        <span className="text-md h-full">
                          "{review?.review}"
                        </span>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="left-14 -bottom-6 absolute">
              <CarouselPrevious className=" bg-slate-200 ring-1" />
              <CarouselNext className=" bg-slate-200 ring-1" />
            </div>
          </Carousel>
        </div>
      </div>
    </Container>
  );
}
