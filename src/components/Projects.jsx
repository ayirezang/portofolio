import React from "react";

import corrTodo from "../assets/corrTodo.png";
import ttravel from "../assets/ttravel.png";

const projects = [
  {
    title: "Todolist",
    description: "A simple todo list application to manage daliy tasks.",
    image: corrTodo,
    technologies: ["React,Tailwind", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ayirezang/TODOLIST",
    livelink: "https://todolist-fgyu.vercel.app",
  },
  {
    title: "Travel journal",
    description: "A platform to share travel experiences and photos",
    image: ttravel,
    technologies: ["React,Tailwind", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ayirezang/travel-journal",
    livelink: "https://travel-journal-brown-gamma.vercel.app",
  },
];

const projectCard = ({ projects }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-12 md:flex-row">
      <img
        src={projects.image}
        alt={projects.title}
        className="w-64 md:w-96 rounded-lg"
      />
      <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-white">
          {projects.title}
        </h2>
        <p className="text-white text-md md:text-lg">{projects.description}</p>

        <div>
          {projects.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-sm md:text-md text-white bg-gray-700 px-2 py-1 rounded mr-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={projects.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            GitHub
          </a>
          <a
            href={projects.livelink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="project"
      className="min-h-screen flex flex-col w-full items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <h1 className="text-3xl md:text-5xl font-light text-white">Projects</h1>
      <div>
        {projects.map((proj, index) => (
          <div key={index} className="mb-16">
            {projectCard({ projects: proj })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
