"use client";
import Image from "next/image";
import React, { useState } from "react";
import profilePic from "../../../public/image 1.png";
import { StaticImageData } from "next/image";
import cross from "../../../public/icons/x.png";

type LoginItem = {
  name: string;
  email: string;
  pic: StaticImageData;
};

function LoginForm() {
  const [active, setActive] = useState(false);

  const LoginData: LoginItem[] = [
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      pic: profilePic,
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      pic: profilePic,
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      pic: profilePic,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-[41%]">
      <p className="text-[#404040] text-[32px] font-medium">Login</p>
      <p className="text-[#757575] text-sm font-normal">
        Welcome back! Choose an account.
      </p>
      <div className="w-full max-w-xs flex flex-col gap-2">
        {LoginData.map((item, index) => (
          <div
            className="w-[315px] bg-[#EDEDED] rounded-[50px] flex items-center justify-between py-3 px-5 hover:outline-[#0F67B1] hover:underline-offset-1 "
            key={index}
          >
            <div className=" flex items-center gap-3">
              <div>
                <Image
                  src={item.pic}
                  alt="profile"
                  width={25}
                  height={25}
                  className=" rounded-full"
                />
              </div>
              <div>
                <p className="text-[#404040]">{item.name}</p>
                <p className="text-[#757575] text-[12px]">{item.email}</p>
              </div>
            </div>

            <div>
              <button>
                <Image src={cross} alt="cross" width={16} height={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoginForm;
