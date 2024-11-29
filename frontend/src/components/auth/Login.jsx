import React, { useState } from "react";
import Navbar from "../shared/Navbar.jsx";
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.jsx";
import { Button } from "../ui/button.jsx";
import { Link } from "react-router-dom";

const Login = () => {
  // taking data from the form
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border shadow-md border-gray-200 rounded-[10px] p-4 my-10"
        >
          <h1 className="font-bold text-center text-slate-800 text-3xl mb-5">
            Login Now
          </h1>

          {/* input fields */}
          <div className="my-3">
            <Label>Email</Label>
            <Input
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              type="email"
              placeholder="john@gmail.com"
            />
          </div>
          <div className="my-3">
            <Label>Password</Label>
            <Input
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              type="password"
              placeholder="your password here"
            />
          </div>

          {/* option code */}
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex justify-center my-3 mb-10">
            <Button
              type="submit"
              className="text-[16px] px-24 py-5 border rounded-[5px] bg-[#ad38c2] hover:bg-[#882599] text-white"
            >
              Login
            </Button>
          </div>
          <span className="text-[14px]">
            Don't have an account?{" "}
            <Link
              className="text-[#ad38c2] hover:text-[#882599] font-bold text-[16px]"
              to="/signup"
            >
              Create an account
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
