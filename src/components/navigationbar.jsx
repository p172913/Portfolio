import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { motion, AnimatePresence } from 'framer-motion';

const Navigationbar = () => {
  const location = useLocation();
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'light') {
      setIsLightMode(true);
      document.documentElement.classList.add('light-mode');
    }
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
      setIsLightMode(true);
    }
  };

  const links = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience'},
    { path: '/projects', label: 'Projects' },
    { path: '/opensource', label: 'OpenSource' },
    { path: '/skills', label: 'Skills' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const socials = [
    { icon: <FaGithub />, url: "https://github.com/p172913", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/rajbhargav-pentapati-0a6148237/", label: "LinkedIn" },
    { icon: <SiLeetcode />, url: "https://leetcode.com/u/user0767uj/", label: "LeetCode" },
    { icon: <SiCodechef />, url: "https://www.codechef.com/users/pr961849", label: "CodeChef" },
    { icon: <SiGeeksforgeeks />, url: "https://www.geeksforgeeks.org/user/rajbhargavp/", label: "GFG" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    opened: { opacity: 1, y: 0 }
  };

  return (
    <nav id="nav-overall" className="fixed top-0 left-0 right-0 flex items-center w-full px-6 md:px-12 bg-black/90 backdrop-blur-md z-[100] border-b border-white/10 overflow-visible">
      
      {/* LEFT SECTION: Logo/Brand */}
      <div className="flex-1 flex justify-start">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-neutral-200 to-neutral-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
          RP
        </Link>
      </div>

      {/* CENTER SECTION: Desktop Navigation Links */}
      <div className="hidden md:flex flex-none justify-center">
        <div id="nav-div" className="flex gap-8">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-a text-sm tracking-wide ${location.pathname === link.path ? 'text-white' : 'text-neutral-400 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      
      {/* RIGHT SECTION: Controls */}
      <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme} 
          className="p-2.5 rounded-full hover:bg-neutral-800 transition-all text-white border border-transparent hover:border-white/10"
          aria-label="Toggle Theme"
        >
          {isLightMode ? <FaMoon className="text-lg" /> : <FaSun className="text-yellow-400 text-lg" />}
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2.5 text-white hover:bg-neutral-800 rounded-lg transition-colors z-[110]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-0 h-screen w-full bg-black/98 backdrop-blur-3xl z-[100] flex flex-col items-center justify-center md:hidden px-6"
          >
            <div className="flex flex-col items-center gap-6 mt-12 overflow-y-auto max-h-[60vh] py-6 w-full">
              {links.map(link => (
                <motion.div key={link.path} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className={`text-3xl font-bold tracking-tight transform transition-all duration-300 ${location.pathname === link.path ? 'text-white' : 'text-neutral-500 hover:text-white'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Socials Divider */}
            <motion.div 
              variants={itemVariants} 
              className="w-12 h-px bg-white/10 my-10" 
            />

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-6 text-2xl">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>

            {/* Close Button Hint */}
            <motion.p 
              variants={itemVariants}
              className="mt-12 text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-medium"
            >
              Select a section to navigate
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigationbar;