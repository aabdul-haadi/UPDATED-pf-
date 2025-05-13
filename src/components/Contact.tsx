import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-dark-300 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-fixed bg-center opacity-5"
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-dark-300/50 to-dark-300"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-[#FFC107]/10 text-[#FFC107] rounded-full border border-[#FFC107]/20">
              Get In Touch
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let's Work Together
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to discuss a potential collaboration?
              Feel free to reach out through any of the channels below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-dark-100/50 backdrop-blur-lg p-6 rounded-xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFC107]/10 flex items-center justify-center">
                      <Mail className="text-[#FFC107]" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h4>
                    <a 
                      href="mailto:ahaadi1001@gmail.com" 
                      className="text-gray-300 hover:text-[#FFC107] transition-colors"
                    >
ahaadi1001@gmail.com                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-100/50 backdrop-blur-lg p-6 rounded-xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFC107]/10 flex items-center justify-center">
                      <Phone className="text-[#FFC107]" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Phone
                    </h4>
                    <a 
                      href="tel:+923152504076" 
                      className="text-gray-300 hover:text-[#FFC107] transition-colors"
                    >
                      +92 3152504076
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-100/50 backdrop-blur-lg p-6 rounded-xl border border-gray-800 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFC107]/10 flex items-center justify-center">
                      <MapPin className="text-[#FFC107]" size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Location
                    </h4>
                    <p className="text-gray-300">
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-100/50 backdrop-blur-lg p-6 rounded-xl border border-gray-800">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/abdul-hadi-developer/" 
                    className="w-12 h-12 rounded-xl bg-dark-200 flex items-center justify-center text-gray-300 hover:bg-[#FFC107] hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM8 19H5V8h3v11zM6.5 6.7c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM19 19h-3v-5.6c0-3.4-4-3.1-4 0V19H9V8h3v1.8c1.4-2.6 7-2.8 7 2.5V19z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/aabdul-haadi" 
                    className="w-12 h-12 rounded-xl bg-dark-200 flex items-center justify-center text-gray-300 hover:bg-[#FFC107] hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  {/* <a 
                    href="#" 
                    className="w-12 h-12 rounded-xl bg-dark-200 flex items-center justify-center text-gray-300 hover:bg-[#FFC107] hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a> */}
                  <a 
                    href="https://www.instagram.com/catalyst_zz/" 
                    className="w-12 h-12 rounded-xl bg-dark-200 flex items-center justify-center text-gray-300 hover:bg-[#FFC107] hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 bg-dark-100/50 backdrop-blur-lg p-8 rounded-xl border border-gray-800"
            >
              <h4 className="text-xl font-semibold text-white mb-6">
                Send Me A Message
              </h4>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-dark-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-white placeholder-gray-400"
                      placeholder="zxc@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-dark-200 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#FFC107] focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 bg-[#FFC107] hover:bg-[#FFB000] text-gray-900 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;