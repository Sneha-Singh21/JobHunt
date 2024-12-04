import React from "react";
import JobCards from "./JobCards.jsx";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  return (
    <div className="max-w-6xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#ad38c2]"> Latest & Top </span>Job Openings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {randomJobs.slice(0, 6).map((item, index) => (
          // Return JobCards here with a unique key
          <JobCards key={index} />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
