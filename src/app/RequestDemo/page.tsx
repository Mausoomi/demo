"use client";

import LoginLeftPart from "@/Components/Login/LoginLeftPart";
import React, { useState } from "react";
import profile from "../../../public/image 1.png";
import Image from "next/image";
import { IoMdEyeOff } from "react-icons/io";
import eye from "../../../public/icons/eye.png";
import RequestDemoComponent from "@/Components/RequestDemoComponent";
import Step1 from "@/Components/RequestDemoSteps/Step1";

function RequestDemo() {

  return (
    <div className="flex">
      <LoginLeftPart />
      <div className="flex flex-col items-center justify-center w-[41%] gap-3">
        <p className="text-[#404040] text-[32px] font-medium">
          Plan my Free Demo
        </p>
        <p className="text-[#757575] text-sm font-normal w-[343px] text-center">
          Answer 9 quick questions, and we’ll set you up with your free demo!
        </p>


       
        <div className="w-full max-w-xs">
      
      <Step1/>
        </div>
        <div>
          <RequestDemoComponent />
        </div>
      </div>
    </div>
  );
}

export default RequestDemo;
