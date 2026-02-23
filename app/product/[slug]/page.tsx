"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { getIndividualProduct } from "@/api/products.api";
import { IProduct } from "@/types/products.types";

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [selectedSize, setSelectedSize] = useState<number>(38);
  const [selectedColor, setSelectedColor] = useState<string>("navy");

  const { data: product, isLoading, isError } = useQuery<IProduct>({
    queryKey: ["product", slug],
    queryFn: async () => {
      const formattedTitle = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      const response = await getIndividualProduct(formattedTitle);
      return Array.isArray(response) ? response[0] : response;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0EEEB]">
        <div className="w-8 h-8 border-4 border-blue border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0EEEB]">
        <p className="font-bold uppercase tracking-widest text-red-500">Product Not Found</p>
      </div>
    );
  }

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

  return (
    <div className="mx-auto px-4 md:px-15 py-8 bg-gray">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        <div className="hidden lg:grid lg:col-span-8 grid-cols-2 gap-2">
          {product.images?.slice(0, 4).map((img, idx) => {
            const cornerClass =
              idx === 0 ? "rounded-tl-[48px]" :
              idx === 1 ? "rounded-tr-[48px]" :
              idx === 2 ? "rounded-bl-[48px]" :
              idx === 3 ? "rounded-br-[48px]" : "";

            return (
              <div
                key={idx}
                className={`relative aspect-square overflow-hidden bg-white ${cornerClass}`}
              >
                <Image
                  src={img}
                  alt={product.title || "Product image"}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            );
          })}
        </div>

        <div className="lg:hidden w-full -mx-4">
          <Carousel
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-0">
              {product.images?.slice(0, 4).map((img, idx) => (
                <CarouselItem key={idx} className="pl-0 basis-full">
                  <div className="relative w-full aspect-square bg-white overflow-hidden">
                    <Image
                      src={img}
                      alt={product.title || `Product image ${idx + 1}`}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <MobileCarouselDots total={Math.min(product.images?.length ?? 0, 4)} />
          </Carousel>

          <div className="flex gap-2 justify-center mt-3 px-4">
            {product.images?.slice(0, 4).map((img, idx) => (
              <div
                key={idx}
                className="relative w-16 h-16 rounded-lg overflow-hidden bg-white flex-shrink-0"
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-2 pl-0 lg:pl-6">
          <div>
            <span className="bg-blue text-white text-xs font-semibold px-4 py-3 rounded-xl tracking-wider">
              New Release
            </span>
            <h1 className="text-[32px] font-semibold mt-4 leading-tight uppercase text-textColor">
              {product.title}
            </h1>
            <p className="text-2xl font-semibold text-blue mt-4">
              ${product.price?.toFixed(2)}
            </p>
          </div>

          <div className="my-8">
            <p className="text-xs font-bold uppercase tracking-tight mb-2">Color</p>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setSelectedColor("navy")}
                className={`w-12 h-12 rounded-full bg-transparent p-1 border-2 cursor-pointer ${selectedColor === "navy" ? "border-textColor" : "border-transparent"}`}
              >
                <div className="w-full h-full rounded-full bg-[#2B343E] border border-white/20" />
              </button>
              <button
                onClick={() => setSelectedColor("green")}
                className={`w-12 h-12 rounded-full bg-transparent p-1 border-2 cursor-pointer ${selectedColor === "green" ? "border-textColor" : "border-transparent"}`}
              >
                <div className="w-full h-full bg-[#7D8471] rounded-full border border-white/20" />
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <p className="text-xs font-bold uppercase">Size</p>
              <button className="text-[10px] font-bold underline uppercase">Size Chart</button>
            </div>
            <div className="grid grid-cols-6 lg:grid-cols-8 gap-1">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 w-12.5 h-12 text-sm font-medium rounded-sm transition-all
                    ${selectedSize === size
                      ? "bg-textColor text-white"
                      : "bg-white text-textColor hover:bg-gray-200"
                    } ${size === 39 || size === 40 ? "opacity-40 cursor-not-allowed bg-gray-100" : ""}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <Button className="flex-1 bg-textColor text-white font-bold h-12 rounded-lg uppercase tracking-tighter shadow-none">
              Add To Cart
            </Button>
            <Button variant="outline" className="px-4 h-12 rounded-lg border-2 bg-textColor text-white shadow-none hover:bg-white">
              <Heart className="w-5 h-5" />
            </Button>
          </div>

          <Button className="w-full bg-blue hover:bg-blue text-white font-bold rounded-lg h-12 uppercase tracking-tighter shadow-none">
            Buy It Now
          </Button>

          <div className="mt-4 pt-6">
            <h3 className="text-xs font-bold uppercase mb-2">About The Product</h3>
            <p className="text-sm text-gray-600 mb-4">{product.description}</p>
            <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
              <li>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
              <li>Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

function MobileCarouselDots({ total }: { total: number }) {
  const { api } = useCarousel();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    onSelect();
    return () => { api.off("select", onSelect); };
  }, [api]);

  return (
    <div className="flex justify-center gap-1.5 mt-3">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`block rounded-full transition-all duration-300 ${
            i === current
              ? "w-4 h-1.5 bg-textColor"
              : "w-1.5 h-1.5 bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}