import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi NCR",
      "Bangalore",
      "Hyderabad",
      "Mumbai",
      "Pune",
      "Chennai",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Flutter Developer",
      "Data Science",
      "Graphic Designer",
      "Mern Developer",
      "Android Developer",
      "Machine Learning",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "0 - 40k",
      "42k - 1lakh",
      "1lakh - 5lakh",
      "6lakh - 12lakh",
      "12lakh - 20lakh",
    ],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-[10px]">
      <h1 className="font-bold text-2xl">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-xl mt-4 mb-2">{data.filterType}</h1>
            {data.array.map((item, idx) => (
              <div className="flex items-center space-x-2 my-1" key={idx}>
                <RadioGroupItem value={item} className="w-4 h-4"/>
                <Label className="text-[#000000] text-sm">{item}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
