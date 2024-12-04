import React from "react";
import { Badge } from "../ui/badge";

const JobCards = () => {
  return (
    <div className="p-5 rounded-[10px] shadow-xl bg-white border border-gray-100 cursor-pointer">
      <div className="flex flex-col mb-3">
        <h1 className="text-2xl font-bold text-[#000000]">Company Name</h1>
        <p className="text-[#696969] font-medium text-[15px]">India</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-[#000000]">Job Title</h1>
        <p className="text-[#696969] text-[15px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"}>12 Positions</Badge>
        <Badge className={"text-[#F83002] font-bold"}>Part Time</Badge>
        <Badge className={"text-[#ad38c2] font-bold"}>24LPA</Badge>
      </div>
    </div>
  );
};

export default JobCards;
