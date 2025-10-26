import React from "react";
import myPROFILE from "../assets/myPROFILE.JPEG";
const Home = () => {
  return (
    <div
      id=""
      className="px-4 flex  w-full items-center justify-center pt-28 pb-14  md:px-8 lg:px-16 "
    >
      <div className="flex flex-col items-center gap-10 text-white">
        <div>
          <img
            src={myPROFILE}
            alt="image"
            className="w-[250px]  h-[250px] object-cover cursor-pointer rounded-full shadow-xl shadow-amber-900"
          />
        </div>
        <div className="flex max-w-[600px]  flex-col items-center justify-center gap-5 text-center">
          <h1 className="text-4xl font-light md:text-6xl">
            Patience Ayirezang
          </h1>
          <h2 className="text-2xl md:text-3xl">Web developer</h2>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I'm a full stack developer skilled in React,Tailwind and focused on
            building clean and scable applications,from front-end design to
            seamless database integration with MongoDB,I create efficient
            solutions or dynamic user experience.Let's build something greate
            together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
