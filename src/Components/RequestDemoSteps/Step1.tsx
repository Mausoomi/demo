"use client";

import LoginLeftPart from "@/Components/Login/LoginLeftPart";
import React, { useState } from "react";
import profile from "../../../public/image 1.png";
import Image from "next/image";
import { IoMdEyeOff } from "react-icons/io";
import eye from "../../../public/icons/eye.png";
import RequestDemoComponent from "@/Components/RequestDemoComponent";

function Step1() {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const dummyPassword = "123456";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);

    if (enteredPassword === dummyPassword) {
      console.log("Success: Password matches.");
      setError(""); // Clear any previous error
      setSuccessMsg(true);
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleIconClick = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === dummyPassword) {
      console.log("Form submitted successfully with password:", password);
    } else {
      setError("Incorrect password. Please try again.");
    }
  };
  return (
    <div>
 <div>
    
 </div>


      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-[#404040] text-sm font-medium mb-2">
            Password
          </label>
          <div className=" relative">
            <input
              className={`shadow appearance-none border-[1px] rounded-[8px] w-full py-2 px-3 focus:outline-none focus:shadow-outline ${
                error
                  ? "border-red-500"
                  : !error && password
                  ? "bg-[#EDFAF0] "
                  : "border-[#D0D0D0] "
              }`}
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <div className=" absolute top-0 right-0 h-full flex items-center pr-2">
              <button onClick={handleIconClick}>
                {showPassword ? (
                  <IoMdEyeOff className="text-[#404040] text-[20px]" />
                ) : (
                  <Image src={eye} alt="icon" width={20} height={20} />
                )}
              </button>
            </div>
          </div>
        </div>
        {error && <p className="text-red-500 text-sm pb-5">{error}</p>}
        {successMsg && (
          <div>
            <ul className="flex flex-col  gap-1 pb-5">
              <li className="flex items-center justify-start gap-2">
                <div className="h-[6px] w-[6px] rounded-full bg-[#43936C]"></div>
                <p className="text-[12px] text-[#43936C] font-medium">
                  Minimum 8 characters.
                </p>
              </li>
              <li className="flex items-center justify-start gap-2">
                <div className="h-[6px] w-[6px] rounded-full bg-[#43936C]"></div>
                <p className="text-[12px] text-[#43936C] font-medium">
                  First capital letter
                </p>
              </li>
              <li className="flex items-center justify-start gap-2">
                <div className="h-[6px] w-[6px] rounded-full bg-[#43936C]"></div>
                <p className="text-[12px] text-[#43936C] font-medium">
                  Contains a numbers or symbols.
                </p>
              </li>
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between pb-7">
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>Remember Me</p>
          </div>
          <p className="text-[#0F67B1] text-sm font-medium">Forgot Password?</p>
        </div>
        <button
          className={`w-[315px] ${
            !error && password
              ? "text-[#FFFFFF] border-[#141414] bg-[#0F67B1]"
              : "text-[#B0B0B0] bg-[#EDEDED]  "
          }  text-center  rounded-[50px]  py-4 px-5 `}
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default Step1;
