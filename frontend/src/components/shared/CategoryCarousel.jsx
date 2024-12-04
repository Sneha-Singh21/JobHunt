import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel.jsx";
import { Button } from "../ui/button.jsx";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Flutter Developer",
  "Data Science",
  "Artificial Intelligence",
  "Graphic Designer",
  "FullStack Developer",
  "MERN Stack Developer",
  "Python Developer",
  "Android Developer",
  "Machine Learning",
  "Data Analyst",
];

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto mt-16 mb-24">
        <CarouselContent>
          {categories.map((item, index) => (
            <CarouselItem
              key={index} // Add a unique key for each item
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Button
                variant="outline"
                className="rounded-full"
              >
                {item}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
