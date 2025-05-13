import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.5,
            delay: index * 0.1 
          } 
        }
      }}
      className="group relative bg-dark-100/50 backdrop-blur-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFC107]/20 border border-gray-800"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-300/90 z-10"></div>
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-dark-300/20 group-hover:bg-dark-300/40 transition-colors duration-300"></div>
      </div>
      
      <div className="relative z-20 p-6">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-semibold text-white group-hover:text-[#FFC107] transition-colors duration-300">
            {project.title}
          </h4>
          {project.category === 'professional' && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
              Professional
            </span>
          )}
          {project.category === 'personal' && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
              Personal
            </span>
          )}
          {project.category === 'react' && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
              React
            </span>
          )}
          {project.category === 'wordpress' && (
            <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
              WordPress
            </span>
          )}
        </div>
        
        <p className="text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 text-xs font-medium bg-dark-200/50 text-gray-300 rounded-full border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700/50">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[#FFC107] hover:text-white transition-colors group"
            >
              <ExternalLink size={16} className="mr-1 transform group-hover:rotate-45 transition-transform duration-300" />
              Live Preview
            </a>
          )}
          
          {['MILAP', 'Reveal', 'Sindh Police - Tenant System'].includes(project.title) && project.githubLink && (
  <a
    href={project.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors group"
  >
    <Github size={16} className="mr-1 transform group-hover:scale-110 transition-transform duration-300" />
    View Code
  </a>
)}

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;