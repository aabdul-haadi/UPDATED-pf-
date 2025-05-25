import agencyImage from '../assets/agency.png';
import breakfastImage from '../assets/breakfast.png';
import clockImage from '../assets/clock.png';
import earthOrbitImage from '../assets/earth-orbit.png';
import eventImage from '../assets/event.png';
import interiorImage from '../assets/interiorz.png';
import loginImage from '../assets/login.png';
// import petImage from '../assets/pet.png';
import shoesImage from '../assets/shoes.png';
import talkToAllahImage from '../assets/talktoAllah.png';
import wheelImage from '../assets/wheel.png';
import petimg from '../assets/pett.jpg';
import pfimg from '../assets/pf.jpg';






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
    description: "An internal Sindh Police platform for employee verification and project details",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "professional",
    githubLink: "https://github.com/shabbirfast/reveal"
  },
  {
    title: "Sindh Police - Tenant System",
    description: "A system to manage tenant and property information for Sindh Police.",
    technologies: ["HTML", "Bootstrap", "JavaScript", "SQL"],
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
    description: "A project to talk to Allah about your feelings through personal prayer and reflection.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: talkToAllahImage, // Replaced with imported image
    category: "personal",
    liveLink: "https://talk-to-allah.vercel.app/"
  },
  {
    title: "Login & Quiz Platform",
    description: "A quiz platform for HTML, CSS, and JS with login functionality on a local server.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: loginImage, // Replaced with imported image
    category: "personal",
    liveLink: "https://quiz-ctdr618dp-abdul-haadis-projects-ef84c69f.vercel.app/"
  },
  {
    title: "Discount Calculator",
    description: "A product card to calculate discounts for shopping.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: shoesImage, // Replaced with imported image
    category: "personal",
    liveLink: "https://discount-apply.vercel.app/"
  },
  {
    title: "Digital Clock",
    description: "A sleek, functional digital clock application.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: clockImage, // Replaced with imported image
    category: "personal",
    liveLink: "https://digital-clock-woad-phi.vercel.app/"
  },
  {
    title: "Wheel Project",
    description: "An interactive spinning wheel showing up verse.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: wheelImage, // Replaced with imported image
    category: "personal",
    liveLink: "https://spin-wheel-bice.vercel.app/"
  },
  
  // React Projects
  {
    title: "Pet Care",
    description: "A comprehensive pet care service application.",
    technologies: ["React", "TailwindCSS", "TypeScript"],
    image: petimg, // Replaced with imported image
    category: "react",
    liveLink: "https://paw-care-blue.vercel.app/"
  },
  {
    title: "Earth Orbit Landing Page",
    description: "A visually stunning landing page with orbital animations.",
    technologies: ["React", "TailwindCSS"],
    image: earthOrbitImage, // Replaced with imported image
    category: "react",
    liveLink: "https://earth-orbit-nine.vercel.app/"
  },
  {
    title: "Digital Agency",
    description: "A modern website for a digital services agency.",
    technologies: ["React", "TailwindCSS"],
    image: agencyImage, // Replaced with imported image
    category: "react",
    liveLink: "https://agnecy-website-pearl.vercel.app/"
  },
  {
    title: "Food Delivery App",
    description: "A food delivery application with smooth animations using Framer Motion.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    image: breakfastImage, // Replaced with imported image
    category: "react",
    liveLink: "https://food-app-tau-lovat.vercel.app/"
  },
  {
    title: "Elite Renovations",
    description: "A website for an interior design and renovation company.",
    technologies: ["React", "TailwindCSS"],
    image: interiorImage, // Replaced with imported image
    category: "react",
    liveLink: "https://interior-design-website-ashy.vercel.app/"
  },
  
  // WordPress Projects
  {
    title: "Portfolio Website",
    description: "A professional portfolio website built with WordPress.",
    technologies: ["WordPress", "PHP", "CSS"],
    image: pfimg, // Replaced with imported image
    category: "wordpress",
    liveLink: "https://portfolio.abdulhadishamim.com/"
  },
  {
    title: "Affiliate Store on Blogger.com",
    description: "An affiliate store built on Blogger.com using a template with custom styling.",
    technologies: ["Blogger", "HTML", "CSS", "JavaScript"],
    image: agencyImage, // Replaced with imported image
    category: "wordpress",
    liveLink: "https://vr360solution.blogspot.com/"
  },
  {
    title: "Event Management Site",
    description: "A website for managing and promoting events.",
    technologies: ["WordPress", "PHP", "JavaScript"],
    image: eventImage, // Replaced with imported image
    category: "wordpress",
    liveLink: "https://elitegatherting.abdulhadishamim.com/"
  }
];