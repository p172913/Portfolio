import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { cn } from '../lib/utils';

const Mainscreen = () => {
  return (
    <div className="relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black overflow-hidden px-4 py-16">
      {/* Dot Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      
      {/* Radial Mask */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {/* Content */}
      <div className="relative z-20 text-center">
        <h1 className="inline-block pb-2 leading-tight text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent"
        >
          Raj Bhargav Pentapati
        </h1>

        <h2 className="text-md md:text-xl lg:text-2xl text-neutral-300 mt-4">
          Software Engineer and Open Source Contributor <span className="text-indigo-300 font-semibold typing-text">
          </span>
        </h2>

        <div className="flex justify-center gap-4 mt-6 text-2xl">
          <a href="https://github.com/p172913" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rajbhargav-pentapati-0a6148237/" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-blue-600 transition">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/user0767uj/" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-yellow-500 transition">
            <SiLeetcode />
          </a>
          <a href="https://www.codechef.com/users/pr961849" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-blue-400 transition">
            <SiCodechef />
          </a>
          <a href="https://www.geeksforgeeks.org/user/rajbhargavp/" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-blue-400 transition">
            <SiGeeksforgeeks />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mainscreen;