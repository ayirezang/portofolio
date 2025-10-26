import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="text-white fixed  top-0 z-10 w-full flex  items-center justify-between border-b border-b-gray-700 px-16 py-6 md:justify-evenly">
      <a
        href="#"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold "
      >
        PATIENCE
      </a>
      {/**DESKTOP */}
      <ul className="hidden md:flex gap-10">
        <a href="#" className="cursor-pointer opacity-70">
          <li>Home</li>
        </a>
        <a href="#tech" className="cursor-pointer opacity-70">
          <li>Tech</li>
        </a>

        <a href="#project" className="cursor-pointer opacity-70">
          <li>Projects</li>
        </a>
        <a href="#contact" className="cursor-pointer opacity-70">
          <li>Contact</li>
        </a>
      </ul>
      {/**icons socials */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl hover:text-blue-400 opacity-70">
          <BsLinkedin className="text-white" />
        </li>
        <li className="cursor-pointer text-xl hover:text-blue-400 opacity-70">
          <BsTwitterX />
        </li>
        <li className="cursor-pointer text-xl hover:text-blue-400 opacity-70">
          <BsFacebook />
        </li>
        <li className="cursor-pointer text-xl hover:text-blue-400 opacity-70">
          <BsGithub />
        </li>
        {/**mobile menu */}
      </ul>
      <div className="md:hidden  cursor-pointer text-2xl">
        {isOpen ? <BiX onClick={menuOpen} /> : <BiMenu onClick={menuOpen} />}
      </div>
      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black p-12 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col  gap-8">
            <a href="#" className="cursor-pointer opacity-70">
              <li>Home</li>
            </a>
            <a href="#tech" className="cursor-pointer opacity-70">
              <li>Tech</li>
            </a>
            <a href="#project" className="cursor-pointer opacity-70">
              <li>Projects</li>
            </a>
            <a href="#contact" className="cursor-pointer opacity-70">
              <li>Contact</li>
            </a>
          </ul>
          {/**MOBILE SOCIAL ICONS */}
          {/* <ul className="flex flex-wrap  gap-5">
            <li className="cursor-pointer text-xl hover:text-blue-400 opacity-70">
              <BsLinkedin className="text-white" />
            </li>
            <li className="cursor-pointer text-xl hover:text-blue-400 opacity-70">
              <BsTwitterX />
            </li>
            <li className="cursor-pointer text-xl hover:text-blue-400 opacity-70">
              <BsFacebook />
            </li>
            <li className="cursor-pointer text-xl hover:text-blue-400 opacity-70">
              <BsGithub />
            </li>
          </ul> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
