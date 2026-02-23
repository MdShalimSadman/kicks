import { reviewsData } from "@/data/reviewsData";
import { Button } from "../ui/button";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <section className="w-full px-4 md:px-15">
      <div className="mb-5 mt-5 lg:mb-12 lg:mt-32 flex w-full justify-between items-center lg:items-end">
        <h2 className="text-textColor text-2xl lg:text-[74px] font-semibold max-w-[50%] lg:uppercase leading-[95%]">
          Reviews
        </h2>
        <Button title="See all" name="See all">
          See All
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {reviewsData.map((review, index) => (
          <div 
            key={review.id} 
            className={index !== 0 ? "hidden lg:block" : "block"}
          >
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;