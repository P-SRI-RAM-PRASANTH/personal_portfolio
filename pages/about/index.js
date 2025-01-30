// icons
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  return (
    <div className="container mx-auto h-full flex flex-col xl:flex-row items-center gap-x-6">
      {/* Left Content */}
      <div className="text-center flex flex-col justify-center xl:pt-30 xl:text-left h-full translate-z-0">
        <motion.h1
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h1"
        >
          Transforming Ideas <br /> Into <span className="text-accent">Digital Reality</span>
        </motion.h1>
        <motion.p
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
        >
          Hi Everyone, I am Prasanth from Chirala, India.<br />
          I am currently pursuing B.Tech in Computer Science and Engineering at Bapatla Engineering College.<br />
          Looking for a challenging and rewarding position in a dynamic organization where I can utilize my skills and experience to
          contribute to the growth and success of the company.
        </motion.p>
      </div>
 {/* Right Image */}
 <motion.div
  variants={fadeIn('up', 0.4)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="flex-1 flex justify-center items-center xl:pt-40 relative"
>
  {/* Container for image */}
  <div
    className="relative w-80 h-180 xl:w-[350px] xl:h-[600px] overflow-hidden shadow-lg border-1 border-red-500 animate-blink shadow-red-500"
    style={{
      borderTopLeftRadius: '10rem',
      borderBottomRightRadius: '4rem',
    }}
  >
    {/* Static image */}
    <img
      src="../../my1.png"
      alt="About Me"
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
    />
  </div>

  <style jsx>{`
    @keyframes blink {
      0%, 100% {
        box-shadow: 0 0 10px 3px rgba(255, 0, 0, 0.5);
      }
      50% {
        box-shadow: 0 0 20px 5px rgba(255, 0, 0, 1);
      }
    }
    .animate-blink {
      animation: blink 1.5s infinite;
    }
  `}</style>
</motion.div>




    </div>
  );
};

export default About;
