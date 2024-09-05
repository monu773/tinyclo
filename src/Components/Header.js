import React, { useState } from "react";
import logo from "../Images/logo.png";

const Header = () => {
  const [tab, setTab] = useState("Home");
  return (
    <div className="py-6 flex flex-row justify-between items-center">
      <img src={logo} alt="" className="w-[100px]" />
      <div>
        <ul className="flex flex-row gap-8">
          <li
            className={`font-normal py-1 text-[20px] ${
              tab === "Home"
                ? "bg-[#FCEBA3] rounded-3xl px-5 text-[#2B2B2B] font-semibold"
                : "text-[#0000007A]"
            }`}
            onClick={() => setTab("Home")}
          >
            Home
          </li>
          <li
            className={`font-normal py-1 text-[20px] ${
              tab === "rent"
                ? "bg-[#FCEBA3] rounded-3xl px-5 text-[#2B2B2B] font-semibold"
                : "text-[#0000007A]"
            }`}
            onClick={() => setTab("rent")}
          >
            Why Rent?
          </li>
          <li
            className={`font-normal py-1 text-[20px] ${
              tab === "clean"
                ? "bg-[#FCEBA3] rounded-3xl px-5 text-[#2B2B2B] font-semibold"
                : "text-[#0000007A]"
            }`}
            onClick={() => setTab("clean")}
          >
            Clean Out Closet
          </li>
          <li
            className={`font-normal py-1 text-[20px] ${
              tab === "about"
                ? "bg-[#FCEBA3] rounded-3xl px-5 text-[#2B2B2B] font-semibold"
                : "text-[#0000007A]"
            }`}
            onClick={() => setTab("about")}
          >
            About Us
          </li>
          <li
            className={`font-normal py-1 text-[20px] ${
              tab === "store"
                ? "bg-[#FCEBA3] rounded-3xl px-5 text-[#2B2B2B] font-semibold"
                : "text-[#0000007A]"
            }`}
            onClick={() => setTab("store")}
          >
            Store
          </li>
          <li
            className={`font-normal py-1 text-[20px] ${
              tab === "contact"
                ? "bg-[#FCEBA3] rounded-3xl px-5 text-[#2B2B2B] font-semibold"
                : "text-[#0000007A]"
            }`}
            onClick={() => setTab("contact")}
          >
            Contact Us
          </li>
        </ul>
      </div>
      <button
        className="text-[20px] text-[#282C2F] font-semibold bg-[#FCEBA3] rounded-md w-[197px] h-[56px]"
        style={{ border: "1px solid #FFFFFF" }}
      >
        Login/Sign Up
      </button>
    </div>
  );
};

export default Header;
