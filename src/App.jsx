import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack"

const App = () => {
  return (
    <div>
      <Navbar />

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 ">
        <Home />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
