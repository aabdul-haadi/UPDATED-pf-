import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-dark-300/90 backdrop-blur-sm"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mb-6"
          >
            <h2 className="inline-block px-6 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              Web Designer & Developer
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Hello, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Abdul Haadi
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-10"
          >
            <TypeAnimation
              sequence={[
                'I create stunning websites',
                1000,
                'I build web applications',
                1000,
                'I develop user interfaces',
                1000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-xl sm:text-2xl text-gray-300 font-light"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-colors duration-300 group relative overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-full transition-all duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
          </motion.div>
        </div>
        
       <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 1.2 }}
  className="absolute bottom-18 left-1/2 transform -translate-x-1/2 cursor-pointer"  // Increased bottom value
  onClick={scrollToAbout}
>
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
    className="flex justify-center items-center"
  >
    <ChevronDown size={30} className="text-primary" />
  </motion.div>
</motion.div>

      </div>
    </section>
  );
};

export default Hero;