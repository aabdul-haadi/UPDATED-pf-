import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeIcon, Layout, Terminal, Globe, Rocket, Palette, Code2, Smartphone, Bot } from 'lucide-react';

const services = [
{
  icon: <Terminal size={24} />,
  title: 'Frontend Design',
  description: 'Designing clean, intuitive front-end layouts that prioritize user experience.'
},
{
  icon: <CodeIcon size={24} />,
  title: 'Web Development',
  description: 'Building modern, responsive websites using the latest frameworks and technologies.'
},
{
  icon: <Globe size={24} />,
  title: 'WordPress',
  description: 'Developing custom WordPress themes and plugins for streamlined content management.'
},
{
  icon: <Layout size={24} />,
  title: 'CRM/SMS Integration',
  description: 'Implementing CRM and SMS systems for efficient communication and data management.'
},
{
  icon: <Bot size={24} />,
  title: 'AI Chat Assistant',
  description: 'Custom AI chatbot solutions to enhance customer engagement and support.'
}
];

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-dark-200 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed bg-center opacity-5"
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-dark-200 to-dark-300"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-[#FFC107]/10 text-[#FFC107] rounded-full border border-[#FFC107]/20">
              About Me
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Web Designer & Developer
            </h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              I'm passionate about creating beautiful, functional websites that provide exceptional user experiences. 
              With expertise in both design and development, I bridge the gap between aesthetics and functionality.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div 
              style={{ y }}
              whileHover={{ scale: 1.02 }}
              className="bg-dark-100/50 backdrop-blur-lg p-8 rounded-xl border border-gray-800 transform transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFC107]/10"
            >
              <h4 className="text-xl font-semibold mb-4 text-white">My Approach</h4>
              <p className="text-gray-300 mb-4">
                I believe in creating websites that not only look stunning but also deliver exceptional performance and user experience. 
                My work combines creative design with clean, efficient code to build solutions that stand out.
              </p>
              <p className="text-gray-300">
                Whether working on professional projects or personal endeavors, I bring the same level of dedication and attention to detail.
              </p>
            </motion.div>

            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
              whileHover={{ scale: 1.02 }}
              className="bg-dark-100/50 backdrop-blur-lg p-8 rounded-xl border border-gray-800 transform transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFC107]/10"
            >
              <h4 className="text-xl font-semibold mb-4 text-white">Experience</h4>
              <p className="text-gray-300 mb-4">
                I've gained hands-on experience in web development through self-employed projects, freelance work, and a 3-month internship with <span className="text-[#FF6347] font-semibold">Sindh Police</span>. These opportunities allowed me to build interactive and efficient websites.
              </p>
              <p className="text-gray-300">
                My expertise includes HTML, CSS, JavaScript, React, TailwindCSS, and WordPress.
              </p>
            </motion.div>
          </motion.div>

          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-center text-white mb-10"
          >
            Services I Offer
          </motion.h3>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-dark-100/50 backdrop-blur-lg p-6 rounded-xl border border-gray-800 hover:border-[#FFC107]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#FFC107]/10"
              >
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFC107]/10 text-[#FFC107] mb-4"
                >
                  {service.icon}
                </motion.div>
                <h4 className="text-lg font-semibold mb-2 text-white">{service.title}</h4>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;