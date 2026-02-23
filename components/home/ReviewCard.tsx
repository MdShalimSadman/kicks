import { FC } from "react";
import Image from "next/image";
import StarIcon from "../icons/StarIcon";
import { IReview } from "@/types/reviews.types";

interface ReviewCardProps {
  review: IReview;
}

const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden flex flex-col h-full shadow-sm">
      <div className="p-6 lg:p-8 flex flex-col gap-4">
        <div className="flex justify-between gap-2 items-start">
          <div className="space-y-1">
            <h3 className="text-xl lg:text-2xl font-bold text-[#1A1A1A]">
              {review.title}
            </h3>
            <p className="text-gray-500 text-sm lg:text-base leading-snug">
              {review.comment}
            </p>
          </div>

          <div className="relative w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0">
            <Image
              src={review.avatar}
              alt="Reviewer avatar"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Rating Section */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
          <span className="ml-2 font-bold text-lg text-[#1A1A1A]">
            {review.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Bottom Section: Product Image */}
      <div className="relative w-full mt-auto overflow-hidden rounded-b-[32px] aspect-358/229 lg:aspect-429/325">
        <Image
          src={review.productImg}
          alt="Product shown in review"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
