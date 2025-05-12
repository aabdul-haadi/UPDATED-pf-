import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { projects, ProjectCategory } from '../data/projects';
import { ChevronDown } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const categories: { value: ProjectCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'professional', label: 'Professional' },
    { value: 'personal', label: 'Personal' },
    { value: 'react', label: 'React & TailwindCSS' },
    { value: 'wordpress', label: 'WordPress' },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-200">
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed bg-center opacity-5"
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
              My Work
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Featured Projects
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A collection of my latest work across various platforms and technologies.
              Each project represents my commitment to quality and attention to detail.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => {
                  setActiveCategory(category.value);
                  setShowAll(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-primary text-white'
                    : 'bg-dark-100 text-gray-300 hover:bg-dark-100/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>

          {filteredProjects.length > 6 && (
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all duration-300 group"
              >
                {showAll ? 'Show Less' : 'View More'}
                <ChevronDown 
                  size={20} 
                  className={`ml-2 transform transition-transform duration-300 ${
                    showAll ? 'rotate-180' : ''
                  }`} 
                />
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;