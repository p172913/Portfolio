import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigationbar = () => {
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);



  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/opensource', label: 'OpenSource' },
    { path: '/miniproject', label:'MiniProject'},
    { path: '/contact', label: 'Contact' }
    
    
  ];

  return (
    <nav id="nav-overall">
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
      
    </nav>
  );
};

export default Navigationbar;