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

export function CarouselApi({
  is360,
  images,
}: {
  is360: boolean;
  images: string[];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isThrottled, setIsThrottled] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

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

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();

    if (isThrottled) return;

    setIsThrottled(true);

    if (event.deltaY > 0) {
      if (current < count) {
        scrollTo(current);
      }
    } else {
      if (current > 1) {
        scrollTo(current - 2);
      }
    }

    setTimeout(() => {
      setIsThrottled(false);
    }, 300);
  };

  React.useEffect(() => {
    const carouselElement = document.querySelector(
      ".carousel-container"
    ) as HTMLElement;

    if (carouselElement) {
      carouselElement.addEventListener("wheel", handleWheel as EventListener, {
        passive: false,
      });
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener(
          "wheel",
          handleWheel as EventListener
        );
      }
    };
  }, [current, count, isThrottled]);

  return (
    <div className="carousel-container overflow-hidden w-full">
      {isLoading ? (
        <div className="flex flex-col items-center bg-gray-300  rounded-lg p-4">
          <div className="animate-pulse mb-4">
            <div className="sm:h-[320px] md:h-[460px] h-20 w-full rounded-lg bg-gray-400"></div>
          </div>
          <div className="animate-pulse w-3/4 h-6 bg-gray-400 rounded mb-2"></div>
          <div className="animate-pulse w-1/2 h-4 bg-gray-400 rounded"></div>
        </div>
      ) : (
        <>
          <div className="flex w-full ">
            <p className="rounded-full sm:px-4 px-3 py-0 mb-2 mx-auto sm:text-[15px] text-[11px] dark:bg-blue-600 bg-black text-white inline-block">
              {current} / {count}
            </p>
          </div>

          <Carousel className="mb-5" setApi={setApi}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem className="rounded-lg" key={index}>
                  {is360 && (
                    <div className="w-full p-2">
                      <p className="z-50 absolute text-black flex w-full h-full justify-center items-center px-32 text-center">
                        You can't view 360 images on this platform due to
                        privacy reasons. Website can only be accessed only on
                        the domain where it is hosted. Please check out Github.
                      </p>
                      <div
                        className="border rounded-lg shadow-sm
                    w-full h-[320px] md:h-[460px] filter blur-sm bg-white z-0 relative"
                      ></div>
                    </div>
                  )}
                  {!is360 && (
                    <img
                      className={`border 
                    } rounded-lg shadow-sm`}
                      src={image}
                      alt=""
                    />
                  )}
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
                  images.length == 1 ? "hidden" : ""
                }  ${
                  current === index + 1
                    ? "dark:bg-white bg-blue-600"
                    : "bg-gray-400"
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
