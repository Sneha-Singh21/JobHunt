import React from "react";
import Navbar from "../shared/Navbar.jsx";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompaniesTable from "./CompaniesTable.jsx";
import { useNavigate } from "react-router-dom";
import Footer from "../shared/Footer.jsx";

const Companies = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto my-10">
        <div className="flex items-center justify-between my-8">
          <Input className="w-fit" placeholder="Filter by name" />
          <Button
            onClick={() => navigate("/admin/companies/create")}
            className="bg-[#ad38c2] hover:bg-[#882599] text-white hover:text-white"
            variant="outline"
          >
            New Comapany
          </Button>
        </div>
        <CompaniesTable />
      </div>
      <Footer/>
    </div>
  );
};

export default Companies;
