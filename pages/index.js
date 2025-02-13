import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import Image from 'next/image';
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className="bg-primary h-full ">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative z-10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto translate-z-0">
          <motion.h1 
            key="header" // Key added here
            variants={fadeIn('down', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            className="h1">
            hi I am <span className="text-accent">Prasanth</span>
          </motion.h1>
          <motion.p
            key="description" // Key added here
            variants={fadeIn('down', 0.3)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Software Developer with extensive experience in development and operations, delivering high-quality and impactful solutions.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn key="projects-btn-mobile" /> {/* Key added here for mobile */}
          </div>
          <motion.div 
            key="projects-btn-desktop" // Key added here for desktop
            variants={fadeIn('down', 0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      
      <div className="w-[1100px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-#000000 opacity: 90 translate-z-0 "></div>
        <div>
          <ParticlesContainer />
        </div>
        <motion.div
          key="avatar" // Key added here for Avatar component
          variants={fadeIn('down', 0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className="w-full h-full max-w-[437px] max-h-[378px] absolute -bottom-20 lg:bottom-0 lg:right-[8%]" 
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

