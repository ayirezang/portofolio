import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-[70vh] min-w-full flex  items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-x-6 p-14">
        <h1 className="text-center text-4xl md:text-6xl">
          <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-500 font-semibold">
          Want to connect send an email through this button
        </p>
        <a
          href="mailto:patienceayirezang56@gmail.com"
          className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg shadow-lg shadow-indigo-700 hover:shadow-xl hover:shadow-indigo-600"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Contact;
