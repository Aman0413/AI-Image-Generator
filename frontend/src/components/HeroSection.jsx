import React from "react";
import img1 from "../assets/image0_0 (1).jpg";
import img2 from "../assets/image1_0.jpg";

function HeroSection() {
  return (
    <div className="w-full  flex justify-center items-center mt-24 ">
      <div className=" w-[90%] flex justify-between items-center">
        <div className="flex flex-col p-5 w-[50%] ">
          <div className="flex flex-col gap-2">
            <h2 className="uppercase text-xl">Welcome to Generator</h2>
            <div className="text-5xl font-bold">
              Create amazing content with our{" "}
              <span className="text-[#ffb02f]">AI Image</span> generator.
            </div>
            <p className="text-sm text-text-primary mt-4">
              Elegantly structured content with references in just a few clicks.
            </p>
          </div>
          <div className="flex gap-4 mt-5 ">
            <button className="bg-primary-blue px-4 py-2 rounded-md text-white">
              Sign Up
            </button>
            <button className="bg-[#ffb02f] px-4 py-2 rounded-md">
              Get Started
            </button>
          </div>
        </div>
        <div className=" w-[50%] flex justify-center items-center py-4 ">
          <div className="relative">
            <img src={img1} alt="" className="w-72 rounded-lg ml-72 " />
            <img src={img2} alt="" className="w-72  rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
