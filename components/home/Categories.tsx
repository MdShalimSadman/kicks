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
import { ICategory } from "@/types/categories.types";

const Categories = () => {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) return <p className="p-20 text-white">Loading...</p>;
  if (isError) return <p className="p-20 text-white">Something went wrong!</p>;

  const pairs =
    categories?.reduce((acc: ICategory[][], _, i) => {
      if (i % 2 === 0) acc.push(categories.slice(i, i + 2));
      return acc;
    }, []) || [];

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

        <CarouselContent className="-ml-4 px-4 lg:px-14.5 gap-0">
          {pairs.map((pair, groupIndex) => (
            <CarouselItem key={groupIndex} className="basis-full pl-4 lg:pl-0">
              <div className="flex flex-col lg:flex-row gap-0">
                {pair.map((category, index) => (
                  <div key={category.id} className="w-full lg:w-1/2">
                    <CategoryCard
                      category={category}
                      isFirst={groupIndex === 0 && index === 0}
                    />
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Categories;
