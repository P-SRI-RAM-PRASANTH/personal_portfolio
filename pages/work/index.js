import React, { useState } from "react";
import { motion } from "framer-motion";

// Data
const aboutData = [
  {
    title: "Project-1",
    info: [
      {
        title: "Shopeasy :)",
        data: "Developed the front-end of an e-commerce website that enables users to explore and purchase fashion items.Key Features: Client-side dynamic rendering with Next.js. Deployed on Vercel for seamless performance and scalability, Clean, intuitive user interface with responsive design.",
        link: "https://shopeasy-app.vercel.app/", // Link for the project
      },
    ],
    image: "../../project1.png", // Path to the image for Project 1
  },
  {
    title: "Project-2",
    info: [
      {
        title: "Breast Cancer Predictor",
        data: "A machine learning model to predict the likelihood of breast cancer in patients based on clinical and diagnostic features to assist in early detection and treatment planning.",
        link: "https://p-sri-ram-prasanth-breastcancerprediction-streamlit-app-h6tn47.streamlit.app/",
      },
    ],
    image: "../../project2.png", // Path to the image for Project 2
  },
];

const Work = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 px-4 sm:px-8 md:px-20 py-20 md:py-32 text-center xl:text-left flex flex-col xl:flex-row gap-8">
      {/* Left: Tabs and Content */}
      <div className="flex-1">
        {/* Tabs for Categories */}
        <div className="flex flex-wrap gap-x-4 gap-y-4 xl:gap-y-8 justify-center xl:justify-start mb-8">
          {aboutData.map((item, itemIndex) => (
            <div
              key={itemIndex} // Key for each tab
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

        {/* Content for Selected Category */}
        <motion.div
          key={index} // Key for each content section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {aboutData[index]?.info.length > 0 ? (
            aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-4"> {/* Key for each info item */}
                <div className="text-xl font-bold mb-2 ">{item.title}</div>
                {item.data && <p className="text-gray-600 mb-4">{item.data}</p>}
                {item.link && (
                  <a
                    key={item.link} // Key for the link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-accent text-white px-4 py-2 rounded-md shadow-md hover:bg-accent/90 transition duration-300"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No data available for this category.</p>
          )}
        </motion.div>
      </div>
    
      {/* Right: Image */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex-1 flex justify-center items-center"
      >
        <img
          src={aboutData[index]?.image}
          alt={`Image for ${aboutData[index]?.title}`}
          className="rounded-lg shadow-lg border-1 border-red-500 shadow-red-500  max-w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default Work;
