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
    if (user) {
      axiosPublic("/reviews")
        .then((res) => {
          console.log(res.data);
          setReviews(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  return (
    <Container>
      <div className="bg-gradient-to-r from-primary to-btn-hover p-8 rounded-xl my-28">
        <div className="flex flex-col items-center justify-center gap-14 text-center my-20 ">
          <div className="  flex flex-col items-center justify-center max-w-2xl">
            <h3 className="text-3xl text-white font-semibold secondary-font">
              Hear From Our Happy Campers
            </h3>
            <p className="mt-2 font-medium text-white/80">
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
                  className="pl-1 basis-10/12 md:basis-1/2 xl:basis-1/3 h-full"
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
