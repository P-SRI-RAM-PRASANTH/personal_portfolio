import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";
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
          className="relative w-80 h-80 xl:w-[350px] xl:h-[600px] overflow-hidden shadow-lg border-1 border-red-500 animate-blink shadow-red-500"
          style={{
            borderTopLeftRadius: '10rem',
            borderBottomRightRadius: '4rem',
          }}
        >
          {/* Static image using next/image */}
          <motion.div
            className="w-full h-full"
            style={{ position: 'relative', overflow: 'hidden', borderRadius: '10rem 0 4rem 0' }}
          >
            <Image
              src="/my1.png"  // Make sure the image is in the public folder
              alt="About Me"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              layout="fill"  // This makes the image take up the entire container
              objectFit="cover" 
            />
          </motion.div>
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


