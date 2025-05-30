import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'TailwindCSS', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'JavaScript', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'PHP', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'SQL', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Node.js', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
    ]
  },
  {
    title: 'CMS',
    icon: '📝',
    skills: [
      { name: 'WordPress', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
      // { name: 'Blogger', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blogger/blogger-original.svg' }
    ]
  }
];

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section id="skills" className="relative py-20 bg-dark-300 overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed bg-center opacity-5"
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              My Skills
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Technical Expertise
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
              across various technologies and frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-dark-100/50 p-6 rounded-2xl shadow-lg shadow-dark-300/50 backdrop-blur-sm border border-gray-800 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h4 className="text-xl font-semibold text-white">
                    {category.title}
                  </h4>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 * skillIndex }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-6 h-6"
                        />
                        <span className="text-gray-200 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 ml-auto">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-dark-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.4 + (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                          className="h-2 rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h4 className="text-xl font-semibold mb-8 text-white">
              Additional Skills & Tools
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['Git', 'Responsive Design', 'UI/UX Design', 'Firebase', 'Digital Marketing'].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ scale: 1.05, color: '#6366F1' }}
                  className="px-4 py-2 bg-dark-100/50 text-gray-300 rounded-full border border-gray-800 hover:border-primary/50 transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;