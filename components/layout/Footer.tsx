import { Plus } from "lucide-react";
import Logo from "../icons/Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <footer>
    <div className="mt-32 px-4 md:px-15">
      <div className="bg-blue rounded-3xl lg:rounded-[48px] pt-2 lg:pt-16  font-semibold">
        <div className="flex flex-col lg:flex-row gap-11.25 p-4 pb-10 lg:pl-18 lg:pr-40 w-full items-start lg:items-center justify-between">
          <div className="text-white">
            <h2 className="lg:uppercase text-[32px] leading-[100%] lg:text-5xl max-w-xl">
              Join our KicksPlus Club & get 15% off
            </h2>
            <p className="text-base font-normal lg:text-[20px] font-sans leading-[100%] mt-4">
              Sign up for free! Join the community.
            </p>
            <div className="flex gap-1 mt-8">
              <Input type="text" placeholder="Email Address" className=" placeholder:text-base placeholder:font-normal px-4 h-10 lg:h-12 w-full lg:w-[65%]" />
              <Button className="bg-textColor h-10 lg:h-12">Submit</Button>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="-mr-3 -mb-2 bg-accent rounded-full flex items-center justify-center w-fit size-6.5 p-1">
              <Plus className="text-blue font-extrabold" size={18}/>
            </div>
            <Logo fill="white" className=" w-47.75 h-11.75 lg:w-87.75 lg:h-22"/>
          </div>
          
        </div>
        <SubFooter/>
      </div>
    </div>
    <div className="mt-7 w-full flex items-center justify-center">
    <p className="font-medium font-sans text-base text-textColor">© All rights reserved </p>
    </div>
    </footer>
  );
};

export default Footer;
