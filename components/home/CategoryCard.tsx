import { ICategory } from "@/types/categories.types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface CategoryCardProps {
  category: ICategory;
  isFirst?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, isFirst }) => (
  <div
    className={`relative aspect-16/11 w-full overflow-hidden bg-[#F3F4F6] group cursor-pointer
    ${isFirst ? "rounded-tl-[64px]" : "rounded-none"}`}
  >
    <div className="absolute inset-0 z-0">
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 transition-colors" />
    </div>

    <div className="relative z-10 h-full w-full flex flex-col justify-end px-4 py-4 lg:px-12 lg:py-7.5">
      <div className="flex justify-between items-end w-full">
        <h3 className="text-2xl lg:text-[46px] font-semibold uppercase leading-[100%] max-w-62.5 text-textColor wrap-break-word">
          {category.name}
        </h3>
        <div className="bg-textColor p-2 lg:p-2.5 text-gray rounded-lg group-hover:bg-black transition-colors shrink-0">
          <ArrowUpRight className="size-4 lg:size-4.5" />
        </div>
      </div>
    </div>
  </div>
);

export default CategoryCard;