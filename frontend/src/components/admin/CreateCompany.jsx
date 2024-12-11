import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar.jsx";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { Button } from "../ui/button.jsx";

const CreateCompany = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-3xl my-2">Your Company Name</h1>
          <p className="text-gray-500">
            What would you like to give your company name? you can change this
            later
          </p>
        </div>

        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="JobHunt, Microsoft etc."
        />

        <div className="flex flex-center gap-2 my-10">
          <Button
            className="bg-[#ad38c2] hover:bg-[#882599] text-white hover:text-white"
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button variant="outline" >Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
