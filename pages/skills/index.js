import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
  FaGit,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiAdobephotoshop,
  SiFirebase,
} from "react-icons/si";

// Icon definitions for cleaner data structure
const icons = {
  python: <FaPython />,
  java: <FaJava />,
  html: <FaHtml5 />,
  css: <FaCss3 />,
  js: <FaJs />,
  git: <FaGit />,
  react: <FaReact />,
  nextjs: <SiNextdotjs />,
  framer: <SiFramer />,
  wordpress: <FaWordpress />,
  figma: <FaFigma />,
  tailwindcss: <SiTailwindcss />,
  photoshop: <SiAdobephotoshop />,
  firebase: <SiFirebase />,
};

// Data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [icons.python, icons.java, icons.js],
      },
      {
        title: "Web Development",
        icons: [
          icons.html,
          icons.css,
          icons.js,
          icons.react,
          icons.nextjs,
          icons.framer,
          icons.tailwindcss,
        ],
      },
      {
        title: "Tools",
        icons: [icons.firebase, icons.git, icons.photoshop],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack Developer(intern) - INNOVATE",
        stage: "2024-25",
      },
      {
        title: "ML Engineer(intern) - Spy Pro Security Solutions",
        stage: "2023",
      },
      {
        title: "Cyber Security - SkillDzire",
        stage: "2024",
      },
    ],
  },
  {
    title: "Certifications",
    info: [
      {
        title: "CPCI (CRACK THE PYTHON CODING INTERVIEW )    : By T-Machine Software Solutions Pvt Ltd",
        stage: "2024",
      },
      {
        title: "SQL and Relational Databases 101   : provided by IBM ",
        stage: "2025",
      },
      {
        title: "Introduction to Cloud  : provided by IBM",
        stage: "2025",
      },
    ],
  },
];

const Skills = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 px-8 py-20 md:py-32">
      {/* Content Section */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between">
        {/* Left Side: Text Content */}
        <div className="w-full xl:w-1/2 text-center xl:text-left mb-8 xl:mb-0">
          {/* Tabs for Categories */}
          <div className="flex flex-wrap gap-x-4 gap-y-4 xl:gap-y-8 justify-center xl:justify-start mb-8">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                role="tab"
                aria-selected={index === itemIndex}
                className={`${
                  index === itemIndex
                    ? "text-accent after:w-[100%] after:bg-accent"
                    : "text-gray-500 hover:text-accent"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 transition-all duration-300`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Content for Selected Tab */}
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {aboutData[index]?.info.length > 0 ? (
              aboutData[index].info.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-4">
                  <div className="text-xl font-bold mb-2">{item.title}</div>
                  {item.icons ? (
                    <div className="flex flex-wrap gap-4 text-3xl">
                      {item.icons.map((icon, iconIndex) => (
                        <div
                          key={iconIndex}
                          className="hover:scale-110 transition-transform duration-200"
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">{item.stage}</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No data available for this category.</p>
            )}
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full xl:w-1/2 flex justify-center items-center"
        >
          <img
            src="../../download.PNG"
            alt="Motivational Visual"
            className="rounded-lg shadow-lg max-w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;


