"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "../home/ProductCard";

const HeaderControls = () => (
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
      You may also like
    </h2>
    <div className="relative flex items-center gap-2 mr-12">
      <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-md border-none bg-textColor text-white" />
      <CarouselNext className="static translate-y-0 h-10 w-10 rounded-md border-none bg-textColor text-white hover:bg-zinc-800" />
    </div>
  </div>
);

const ProductCarousel = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <div className="w-full text-center py-20">Loading...</div>;
  if (isError) return <div className="w-full text-center py-20">Something went wrong!</div>;

  // Group products into chunks of 4 for mobile
  const groupedProducts: (typeof products)[] = [];
  if (products) {
    for (let i = 0; i < products.length; i += 4) {
      groupedProducts.push(products.slice(i, i + 4));
    }
  }

  return (
    <section className="w-full px-4 md:px-15 py-10">

      {/* Mobile Carousel — 2x2 grid per slide */}
      <div className="md:hidden">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <HeaderControls />
          <CarouselContent className="-ml-4">
            {groupedProducts.map((group, groupIndex) => (
              <CarouselItem key={groupIndex} className="pl-4 basis-full">
                <div className="grid grid-cols-2 gap-3">
                  {group?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Desktop Carousel — one product per slide */}
      <div className="hidden md:block">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <HeaderControls />
          <CarouselContent className="-ml-4">
            {products?.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <div className="h-full">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

    </section>
  );
};

export default ProductCarousel;