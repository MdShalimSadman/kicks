import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => (
  <div className="px-4 md:px-15">
    <h1 className="uppercase my-6 font-bold text-textColor text-6xl lg:text-[233.5px] leading-[100%]">
      Do it <span className="text-blue">right</span>
    </h1>
    <div className="relative w-full h-95.5 lg:h-187.5">
      <div className="absolute top-28 lg:top-44 -left-15.5 lg:-left-[80.6px] p-2 lg:p-6 rounded-b-2xl -rotate-90 z-50 bg-textColor">
        <p className="text-gray text-xs lg:text-base font-semibold">
          Nike product of the year
        </p>
      </div>
      <Image
        src="/images/hero/hero-bg-image.svg"
        alt="hero-bg"
        fill
        className="object-cover rounded-3xl lg:rounded-[64px]"
        priority
      />
      <div className="z-50 absolute bottom-4 lg:bottom-12 left-4 lg:left-12 font-semibold">
        <p className="text-2xl lg:text-[74px] text-white">NIKE AIR MAX</p>
        <p className="text-sm max-w-[60%] lg:max-w-[65%] lg:text-2xl font-open text-gray">
          Nike introducing the new air max for everyone&apos;s comfort
        </p>
        <Button title="Shop now" name="Shop now" className="mt-2 lg:mt-6">
          Shop Now
        </Button>
      </div>
      <div className="z-50 absolute bottom-4 right-4 lg:bottom-12 lg:right-12 space-y-4">
        <Image
          src="/images/hero/hero-side-shoe-1.svg"
          width={160}
          height={160}
          alt="shoe-1"
          priority
          className="size-16 lg:size-40"
        />
        <Image
          src="/images/hero/hero-side-shoe-2.svg"
          width={160}
          height={160}
          alt="shoe-2"
          priority
          className="size-16 lg:size-40"
        />
      </div>
    </div>
  </div>
);

export default Hero;
