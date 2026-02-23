"use client";

import { useProducts } from "@/hooks/useProducts";
import { Button } from "../ui/button";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;
  
  return (
    <section className="w-full px-4 md:px-15">
      <div className='mb-6 mt-6 lg:mb-8 lg:mt-22.5 flex w-full justify-between items-center lg:items-end'>
        <h2 className="text-textColor text-2xl lg:text-[74px] font-semibold max-w-[50%] lg:uppercase leading-[95%]">
          Don&apos;t miss out new drops
        </h2>
        <Button title="Shop new drops" name="Shop new drops">Shop new drops</Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 items-stretch">
        {products?.slice(0, 4).map((product) => (
          <div key={product.id} className="flex flex-col">
            <ProductCard product={product}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products;