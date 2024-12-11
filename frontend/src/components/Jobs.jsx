import React from "react";
import Navbar from "./shared/Navbar.jsx";
import FilterCard from "./shared/FilterCard.jsx";
import CardForJob from "./shared/CardForJob.jsx";
import Footer from "./shared/Footer.jsx";
import { useSelector } from "react-redux";

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  const {allJobs} = useSelector(store => store.job);
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-5 mb-10">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>

          {allJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] mt-6 overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4 scroll-container overflow-y-auto h-[calc(100vh-100px)]">
                {allJobs.map((job) => (
                  <div key={job?._id}>
                    <CardForJob job={job} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
