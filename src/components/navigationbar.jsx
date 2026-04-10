import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navigationbar = () => {
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'light') {
      setIsLightMode(true);
      document.documentElement.classList.add('light-mode');
    }
  }, []);

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
    // { path: '/miniproject', label:'MiniProject'},
    
  ];

  return (
    <nav id="nav-overall" className="relative flex justify-between items-center w-full">
      <div id="nav-div">
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-a
              md:inline
              ${location.pathname === link.path ? 'hidden md:inline' : ''}
            `}
          >
            {link.label}
          </Link>
        ))}
      </div>
      
      <button 
        onClick={toggleTheme} 
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-neutral-800 transition-colors z-50 text-white"
        aria-label="Toggle Theme"
      >
        {isLightMode ? <FaMoon className="text-xl" /> : <FaSun className="text-yellow-400 text-xl" />}
      </button>
    </nav>
  );
};

export default Navigationbar;