import React from "react";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const TechStack = () => {
  return (
    <div className="flex flex-col justify-center items-center  w-full min-h-[70px] gap-4 md:gap-12">
      <h1 className="text-3xl md:text-5xl font-light text-white">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center p-5 gap-6 md:gap-10">
        <div>
          <BiLogoJavascript className="cursor-pointer text-[30px] sm:text-[40px] md:text-[80px] text-orange-300" />
        </div>
        <div>
          <BiLogoReact className="cursor-pointer text-[30px] sm:text-[40px] md:text-[80px] text-blue-300" />
        </div>

        <div>
          <BiLogoTailwindCss className="cursor-pointer text-[30px]  sm:text-[40px] md:text-[80px] text-blue-300" />
        </div>
        <div>
          <SiExpress className="cursor-pointer text-[30px]  sm:text-[40px] md:text-[80px] text-green-300" />
        </div>
        <div>
          <BiLogoNodejs className="cursor-pointer text-[30px]  sm:text-[40px] md:text-[80px] text-green-300 " />
        </div>
        <div>
          <BiLogoMongodb className="cursor-pointer text-[30px]  sm:text-[40px] md:text-[80px] text-green-300" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
