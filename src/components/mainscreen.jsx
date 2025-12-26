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
      <div className="relative z-20 text-center flex flex-col items-center">
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

        <div className="mt-10">
          <a 
            href="https://drive.google.com/file/d/1kMt2j3i2GByT78Qsyu0YZwdin74cwhtU/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6 text-white inline-block"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>

            <div className="relative flex items-center z-10 rounded-full bg-zinc-950 py-2 px-8 ring-1 ring-white/10">
              Resume
            </div>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mainscreen;