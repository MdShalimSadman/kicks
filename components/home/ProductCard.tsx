import { IProduct } from "@/types/products.types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-cardBg p-2 rounded-2xl lg:rounded-[28px]">
        <div className="relative">
          <Image
            src={product.images[0]}
            alt={product.title}
            className="rounded-xl lg:rounded-3xl w-full aspect-square object-cover"
            width={318}
            height={350}
          />
          <div className="absolute text-xs font-semibold text-white py-1 px-2 lg:py-3 lg:px-4 top-0 left-0 bg-blue rounded-tl-xl rounded-br-xl lg:rounded-tl-3xl lg:rounded-br-3xl">
            New
          </div>
        </div>
      </div>

      <div className="grow flex flex-col justify-between">
        <div className="mt-4 mb-2 lg:mb-3 min-h-9 lg:min-h-12">
          <p className="text-base lg:text-2xl font-semibold text-textColor line-clamp-2 uppercase">
            {product.title}
          </p>
        </div>

        <Button asChild className="w-full bg-textColor text-[10px] md:text-xs lg:text-sm py-5 px-5">
          <Link href={`/product/${product.slug}`}>
            View Product - <span className="text-accent ml-1">${product.price}</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;