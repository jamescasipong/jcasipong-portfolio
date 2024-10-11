import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

import { type CarouselApi } from "@/components/ui/carousel";

export function CarouselApi({ images }: { images: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);

    // Cleanup function to remove event listener
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const scrollTo = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault(); // Prevent default scrolling behavior
    if (event.deltaY > 0) {
      // Scroll down -> next item
      if (current < count) {
        scrollTo(current); // Scroll to the next item
      }
    } else {
      // Scroll up -> previous item
      if (current > 1) {
        scrollTo(current - 2); // Scroll to the previous item
      }
    }
  };

  React.useEffect(() => {
    const carouselElement = document.querySelector(
      ".carousel-container"
    ) as HTMLElement; // Type assertion

    if (carouselElement) {
      // Use type assertion for the listener
      carouselElement.addEventListener("wheel", handleWheel as EventListener, {
        passive: false,
      });
    }

    // Cleanup event listener on unmount
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener(
          "wheel",
          handleWheel as EventListener
        );
      }
    };
  }, [current, count]);

  return (
    <div className="carousel-container overflow-hidden w-full">
      <div className="flex w-full">
        <p className="rounded-full px-4 py-0 mb-2 mx-auto dark:bg-blue-600 bg-black text-white inline-block">
          {current} / {count}
        </p>
      </div>

      <Carousel className="mb-5" setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                className="border-[1px]  rounded-lg shadow-lg"
                src={image}
                alt=""
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 flex space-x-1">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              current === index + 1
                ? "dark:bg-white bg-blue-600"
                : "bg-gray-400"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}