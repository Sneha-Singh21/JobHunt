import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-14">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Job Hunting Website
        </span>
        <h1 className="text-4xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#ad38c2] text-5xl">Dream Jobs</span>
        </h1>
        <p className="font-medium text-[16px] text-[#201f1f]">
          Connecting job seekers with their ideal roles - because every career
          journey deserves a perfect start.
        </p>
        <div className="flex mt-5 w-[42%] shadow-lg border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            className="outline-none border-none w-full pl-3"
            type="text"
            placeholder="Find your dream jobs"
          />
          <Button className="rounded-r-full cursor-pointer bg-[#ad38c2] hover:bg-[#882599] text-white hover:text-white font-bold">
            <Search className="h-4 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
