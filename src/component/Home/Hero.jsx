import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
    const ImgArray = ['https://images.unsplash.com/photo-1659718282278-fd3ba02cb782?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D,https://media-private.canva.com/MAAqwfw9Mgk/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250113T111000Z&X-Amz-Expires=95399&X-Amz-Signature=881b6be23a0ece47db04554c690dd670c46f63fd71036fe7d5b207f590a20ac5&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2014%20Jan%202025%2013%3A39%3A59%20GMT',
    'https://media-private.canva.com/MAAqwfw9Mgk/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250113T111000Z&X-Amz-Expires=95399&X-Amz-Signature=881b6be23a0ece47db04554c690dd670c46f63fd71036fe7d5b207f590a20ac5&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2014%20Jan%202025%2013%3A39%3A59%20GMT', 'https://images.unsplash.com/photo-1659718282409-203239812162?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1659718282962-452648b6eba6?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1547082688-9077fe60b8f9?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
  return (
    <Carousel className="w-full mx-auto relative">
      <CarouselContent className="h-[60vh] md:h-[75vh] lg:h-[77vh]">
        {ImgArray.map( (img,indx) => (
          <CarouselItem key={indx}>
            <div className="h-full w-full">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute bg-black text-white left-10 top-[50%]" />
      <CarouselNext className="absolute bg-black text-white right-10 top-[50%]"/>
    </Carousel>
  );
}
