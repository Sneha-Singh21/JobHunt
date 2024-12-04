import React from "react";
import { Badge } from "../ui/badge.jsx";
import { Button } from "../ui/button.jsx";
import { useNavigate } from "react-router-dom";

const JobDescription = () => {
  const isApplied = true;
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-3xl">Frontent Developer</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold text-[15px]"}>
              12 Positions
            </Badge>
            <Badge className={"text-[#F83002] font-bold text-[15px]"}>
              Part Time
            </Badge>
            <Badge className={"text-[#ad38c2] font-bold text-[15px]"}>
              24LPA
            </Badge>
          </div>
        </div>

        <Button
          disabled={isApplied}
          className={`rounded-[8px] ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed text-white"
              : "bg-[#ad38c2] hover:bg-[#882599] text-white hover:text-white"
          }`}
          variant="outline"
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      <h1 className="border-b-2 border-b-gray-300 font-semibold py-3 mt-5 text-2xl text-gray-950">
        Job Description
      </h1>
      <div className="mt-5">
        <h1 className="font-bold my-1 text-gray-950">Role: <span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
        <h1 className="font-bold my-1 text-gray-950">Description: <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eveniet.</span></h1>
        <h1 className="font-bold my-1 text-gray-950">Location: <span className="pl-4 font-normal text-gray-800">Hyderabad</span></h1>
        <h1 className="font-bold my-1 text-gray-950">Experience: <span className="pl-4 font-normal text-gray-800">2 yrs</span></h1>
        <h1 className="font-bold my-1 text-gray-950">Salary: <span className="pl-4 font-normal text-gray-800">12LPA</span></h1>
        <h1 className="font-bold my-1 text-gray-950">Total Applicants: <span className="pl-4 font-normal text-gray-800">4</span></h1>
        <h1 className="font-bold my-1 text-gray-950">Posted on: <span className="pl-4 font-normal text-gray-800">02-12-2024</span></h1> 
      </div>

      <div className="mt-10">
      <Button onClick={() => navigate('/jobs')} className="bg-[#ad38c2] hover:bg-[#882599] text-white hover:text-white" variant="outline">Go Back</Button>
      </div>
    </div>
  );
};

export default JobDescription;
