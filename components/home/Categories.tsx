"use client";

import { useCategories } from "@/hooks/useCategories";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) return <p className="p-20 text-white">Loading...</p>;
  if (isError) return <p className="p-20 text-white">Something went wrong!</p>;

  return (
    <section className="bg-textColor pt-7 lg:pt-22.5 mt-4 lg:mt-32 overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <div className="flex justify-between w-full items-end px-4 lg:px-14.5 mb-6 lg:mb-12">
          <h2 className="uppercase text-white leading-[95%] text-2xl lg:text-[74px] font-semibold">
            Categories
          </h2>

          <div className="flex gap-4">
            <CarouselPrevious className="static font-semibold translate-y-0 h-8 w-8 lg:h-10 lg:w-10 rounded-lg border-none bg-white text-textColor cursor-pointer" />
            <CarouselNext className="static font-semibold translate-y-0 h-8 w-8 lg:h-10 lg:w-10 rounded-lg border-none bg-white text-textColor cursor-pointer" />
          </div>
        </div>

        <CarouselContent className="-ml-4 px-8 lg:px-14.5 gap-0!">
          {categories?.map((category, index) => (
            <CarouselItem
              key={category.id}
              className="md:basis-1/2 lg:basis-1/2 pl-0"
            >
              <CategoryCard category={category} isFirst={index === 0} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Categories;
