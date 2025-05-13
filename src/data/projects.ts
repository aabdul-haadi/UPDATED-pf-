export type ProjectCategory = 'professional' | 'personal' | 'react' | 'wordpress';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: ProjectCategory;
  liveLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  // Professional Projects
  {
    title: "Reveal",
    description: "An interactive web platform to reveal project details.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "professional",
    githubLink: "https://github.com/shabbirfast/reveal"

  },
  {
    title: "Sindh Police - Tenant System",
    description: "A system to manage tenant and property information for Sindh Police.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "professional",
      githubLink: "https://github.com/aabdul-haadi/Sindh-Police---Tenant-System"
  },
  {
    title: "MILAP",
    description: "A social platform designed to connect people.",
    technologies: ["React", "TailwindCSS", "Firebase"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "professional",
    githubLink: "https://github.com/aabdul-haadi/MILAP_u"
  },
  
  // Personal Projects
  {
    title: "Talk To Allah",
    description: "A spiritual application for personal prayer and reflection.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/2832033/pexels-photo-2832033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "personal",
    liveLink: "https://talk-to-allah.vercel.app/"
  },
  {
    title: "Login & Quiz Platform",
    description: "Interactive quiz platform with authentication.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "personal",
    liveLink: "https://quiz-ctdr618dp-abdul-haadis-projects-ef84c69f.vercel.app/"
  },
  {
    title: "Discount Calculator",
    description: "A tool to calculate discounts for shopping.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "personal",
    liveLink: "https://discount-apply.vercel.app/"
  },
  {
    title: "Digital Clock",
    description: "A sleek, functional digital clock application.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "personal",
    liveLink: "https://digital-clock-woad-phi.vercel.app/"
  },
  {
    title: "Wheel Project",
    description: "An interactive spinning wheel game.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "personal",
    liveLink: "https://spin-wheel-bice.vercel.app/"
  },
  
  // React Projects
  {
    title: "Pet Care",
    description: "A comprehensive pet care service application.",
    technologies: ["React", "TailwindCSS", "TypeScript"],
    image: "https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "react",
    liveLink: "https://paw-care-blue.vercel.app/"
  },
  {
    title: "Earth Orbit Landing Page",
    description: "A visually stunning landing page with orbital animations.",
    technologies: ["React", "TailwindCSS"],
    image: "https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "react",
    liveLink: "https://earth-orbit-nine.vercel.app/"
  },
  {
    title: "Digital Agency",
    description: "A modern website for a digital marketing agency.",
    technologies: ["React", "TailwindCSS"],
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "react",
    liveLink: "https://agnecy-website-pearl.vercel.app/"
  },
  {
    title: "Food Delivery App",
    description: "A food delivery application with smooth animations using Framer Motion.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "react",
    liveLink: "https://food-app-tau-lovat.vercel.app/"
  },
  {
    title: "Elite Renovations",
    description: "A website for an interior design and renovation company.",
    technologies: ["React", "TailwindCSS"],
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "react",
    liveLink: "https://interior-design-website-ashy.vercel.app/"
  },
  
  // WordPress Projects
  {
    title: "Portfolio Website",
    description: "A professional portfolio website built with WordPress.",
    technologies: ["WordPress", "PHP", "CSS"],
    image: "https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "wordpress",
    liveLink: "https://portfolio.abdulhadishamim.com/"
  },
  {
    title: "Blog on Blogger.com",
    description: "A technology and VR focused blog with custom styling.",
    technologies: ["Blogger", "HTML", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "wordpress",
    liveLink: "https://vr360solution.blogspot.com/"
  },
  {
    title: "Event Management Site",
    description: "A website for managing and promoting events.",
    technologies: ["WordPress", "PHP", "JavaScript"],
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "wordpress",
    liveLink: "https://elitegatherting.abdulhadishamim.com/"
  }
];