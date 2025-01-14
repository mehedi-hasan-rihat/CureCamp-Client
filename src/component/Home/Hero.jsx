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
    const ImgArray = ['https://media-private.canva.com/MAAqwfw9Mgk/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250113T111000Z&X-Amz-Expires=95399&X-Amz-Signature=881b6be23a0ece47db04554c690dd670c46f63fd71036fe7d5b207f590a20ac5&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2014%20Jan%202025%2013%3A39%3A59%20GMT','https://media-private.canva.com/MAAqwfw9Mgk/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250113T111000Z&X-Amz-Expires=95399&X-Amz-Signature=881b6be23a0ece47db04554c690dd670c46f63fd71036fe7d5b207f590a20ac5&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2014%20Jan%202025%2013%3A39%3A59%20GMT']
  return (
    <Carousel className="w-full mx-auto relative">
      <CarouselContent className="h-[75vh]">
        {ImgArray.map( indx => (
          <CarouselItem key={indx}>
            <div className="p-1 h-full w-full">
              <img
                src="https://media-private.canva.com/MAAqwfw9Mgk/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250113T111000Z&X-Amz-Expires=95399&X-Amz-Signature=881b6be23a0ece47db04554c690dd670c46f63fd71036fe7d5b207f590a20ac5&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Tue%2C%2014%20Jan%202025%2013%3A39%3A59%20GMT"
                alt=""
                className="w-full h-full"
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
