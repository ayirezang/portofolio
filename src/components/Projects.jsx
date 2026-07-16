import React from "react";

import portofolio from "../assets/portofolio.png";
import ttravel from "../assets/ttravel.png";
import edubridge from "../assets/edubridge.png";

const projects = [
  {
    title: "Early warning  System",
    description:
      "A MERN-stack early warning system that helps identify students at risk of academic failure using performance data.",
    image: portofolio,
    technologies: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ayirezang/early-warning-system",
  },
  {
    title: "Global Edu Bridge",
    description:
      "An AI-powered scholarship chatbot designed to help students find and apply for global educational opportunities.",
    image: edubridge,
    technologies: ["Python", "Streamlit", "OpenRouter API", "LLMs"],
    github: "https://github.com/ayirezang/scholarshipbot4.0",
    livelink: "https://scholarshipbot4-0-2.onrender.com/",
  },
  {
    title: "Travel journal",
    description: "A platform to share travel experiences and photos",
    image: ttravel,
    technologies: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ayirezang/travel-journal",
    livelink: "https://travel-journal-brown-gamma.vercel.app",
  }, // <-- Now correctly inside the array!
]; // <-- The array safely closes here now.

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-12 md:flex-row">
      <img
        src={project.image}
        alt={project.title}
        className="w-64 md:w-96 rounded-lg"
      />
      <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-white">
          {project.title}
        </h2>
        <p className="text-white text-md md:text-lg">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-sm md:text-md text-white bg-gray-700 px-2 py-1 rounded mr-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              GitHub
            </a>
          )}
          {project.livelink && (
            <a
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Live Demo
            </a>
          )}
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
            <ProjectCard project={proj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

// import React from "react";

// import portofolio from "../assets/portofolio.png";
// import ttravel from "../assets/ttravel.png";
// import edubridge from "../assets/edubridge.png";

// const projects = [
//   {
//     title: "Early warning  System",
//     description:
//       "A MERN-stack early warning system that helps identify students at risk of academic failure using performance data.",
//     image: portofolio,
//     technologies: ["React,Tailwind", "Node.js", "Express", "MongoDB"],
//     github: "https://github.com/ayirezang/early-warning-system",
//   },

//   {
//     title: "Global Edu Bridge",
//     description: "An AI-powered scholarship chatbot designed to help students find and apply for global educational opportunities.",
//     image: edubridge,
//     technologies: ["Python","Streamlit","OpenRouter API","LLMS"],
//     github: "https://github.com/ayirezang/scholarshipbot4.0",
//     livelink: "https://scholarshipbot4-0-2.onrender.com/",
//   },
// ];
//   {
//     title: "Travel journal",
//     description: "A platform to share travel experiences and photos",
//     image: ttravel,
//     technologies: ["React,Tailwind", "Node.js", "Express", "MongoDB"],
//     github: "https://github.com/ayirezang/travel-journal",
//     livelink: "https://travel-journal-brown-gamma.vercel.app",
//   },

// const projectCard = ({ projects }) => {
//   return (
//     <div className="flex flex-col items-center gap-8 md:gap-12 md:flex-row">
//       <img
//         src={projects.image}
//         alt={projects.title}
//         className="w-64 md:w-96 rounded-lg"
//       />
//       <div className="flex flex-col gap-4 md:gap-6">
//         <h2 className="text-2xl md:text-4xl font-semibold text-white">
//           {projects.title}
//         </h2>
//         <p className="text-white text-md md:text-lg">{projects.description}</p>

//         <div>
//           {projects.technologies.map((tech, index) => (
//             <span
//               key={index}
//               className="text-sm md:text-md text-white bg-gray-700 px-2 py-1 rounded mr-2"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//         <div className="flex gap-4">
//           <a
//             href={projects.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 underline"
//           >
//             GitHub
//           </a>
//           <a
//             href={projects.livelink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 underline"
//           >
//             Live Demo
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Projects = () => {
//   return (
//     <div
//       id="project"
//       className="min-h-screen flex flex-col w-full items-center justify-center gap-16 p-4 md:px-14 md:py-24"
//     >
//       <h1 className="text-3xl md:text-5xl font-light text-white">Projects</h1>
//       <div>
//         {projects.map((proj, index) => (
//           <div key={index} className="mb-16">
//             {projectCard({ projects: proj })}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
