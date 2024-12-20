import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar.jsx";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import CompaniesTable from "./CompaniesTable.jsx";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "@/hooks/useGetAllCompanies.jsx";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companySlice.js";

const Companies = () => {
  useGetAllCompanies();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input]);

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto my-10">
        <div className="flex items-center justify-between my-8">
          <Input onChange={(e) => setInput(e.target.value)} className="w-fit shadow-md" placeholder="Filter by name" />
          <Button
            onClick={() => navigate("/admin/companies/create")}
            className="bg-[#ad38c2] hover:bg-[#882599] text-white hover:text-white"
            variant="outline"
          >
            New Company
          </Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
};

export default Companies;
