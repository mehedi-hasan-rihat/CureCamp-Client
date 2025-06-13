import { React, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "../sharedComponent/Container";
import useAxiosPublic from "../../hook/useAxiosPublic";

export default function Review() {
    const [reviews, setReviews] = useState([]);
    const axiosPublic = useAxiosPublic();

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
                <div className="flex flex-col items-center justify-center text-center gap-14 ">
                    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center ">
                        <h3 className="text-2xl font-semibold text-white md:text-3xl secondary-font">
                            Hear From Our Happy Campers
                        </h3>
                        <p className="mt-px text-xs font-medium text-white md:mt-2 md:text-base ">
                            Discover what makes Madi Camp special through the
                            words of our visitors. From serene landscapes to
                            unforgettable adventures, our campers share their
                            stories of joy and relaxation. Join the journey and
                            create your own magical memories!
                        </p>
                    </div>
                    <Carousel className="w-full sm:max-w-[70%] mx-auto">
                        <CarouselContent className="-ml-1">
                            {reviews?.map((review) => (
                                <CarouselItem
                                    key={review?._id}
                                    className="h-full pl-1 sm:basis-10/12 md:basis-1/2 xl:basis-1/3"
                                >
                                    <div className="px-1 h-52">
                                        <Card className="h-full p-4">
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={review?.profile_image}
                                                    alt="Profile"
                                                    className="object-center w-8 h-8 rounded-full"
                                                />
                                                <div>
                                                    <p className="-mb-2 font-semibold text-md">
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
                                            <div className="mt-5 text-sm text-start">
                                                <span className="h-full text-md">
                                                    "{review?.review}"
                                                </span>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute left-14 -bottom-6">
                            <CarouselPrevious className=" bg-slate-200 ring-1" />
                            <CarouselNext className=" bg-slate-200 ring-1" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </Container>
    );
}
