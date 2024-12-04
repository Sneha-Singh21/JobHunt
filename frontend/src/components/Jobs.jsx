import React from "react";
import Navbar from "./shared/Navbar.jsx";
import FilterCard from "./shared/FilterCard.jsx";
import CardForJob from "./shared/CardForJob.jsx";
import Footer from "./shared/Footer.jsx";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-5 mb-10">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>

          {jobsArray.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] mt-6 overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4 scroll-container overflow-y-auto h-[calc(100vh-100px)]">
                {jobsArray.map((item, index) => (
                  <div>
                    <CardForJob key={index} />
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
