import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { cn } from '../lib/utils';

const Mainscreen = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-black overflow-hidden px-4 py-12 md:py-16">
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
      <div className="relative z-20 text-center flex flex-col items-center w-full max-w-4xl">
        <h1 className="inline-block pb-2 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent px-2"
        >
          Raj Bhargav Pentapati
        </h1>

        <div className="h-[60px] md:h-auto flex items-center justify-center">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 mt-2 md:mt-4 max-w-[90vw] overflow-hidden whitespace-nowrap">
            <Typewriter
              words={[
                'Platform & DevOps Engineer',
                'CNCF OSS Contributor',
                'AWS & Automation Specialist',
                'Backend Engineer — Java & Spring Boot',
                'NIT Warangal Graduate',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-4 mt-8 md:mt-6 text-2xl">
          <a href="https://github.com/p172913" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-white transition hover:-translate-y-1 hover:scale-110 duration-300" title="GitHub" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rajbhargav-pentapati-0a6148237/" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-blue-600 transition hover:-translate-y-1 hover:scale-110 duration-300" title="LinkedIn" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/user0767uj/" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-yellow-500 transition hover:-translate-y-1 hover:scale-110 duration-300" title="LeetCode" aria-label="LeetCode">
            <SiLeetcode />
          </a>
          <a href="https://www.codechef.com/users/pr961849" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-blue-400 transition hover:-translate-y-1 hover:scale-110 duration-300" title="CodeChef" aria-label="CodeChef">
            <SiCodechef />
          </a>
          <a href="https://www.geeksforgeeks.org/user/rajbhargavp/" target="_blank" rel="noopener noreferrer" className="icon-circle hover:text-blue-400 transition hover:-translate-y-1 hover:scale-110 duration-300" title="GeeksforGeeks" aria-label="GeeksforGeeks">
            <SiGeeksforgeeks />
          </a>
        </div>

        <div className="mt-12 md:mt-10">
          <a 
            href="https://drive.google.com/file/d/1Ojlsc9MCKEKscAdOst98L0Tps2Su2DXF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6 text-white inline-block hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>

            <div className="relative flex flex-row gap-2 items-center z-10 rounded-full bg-zinc-950 py-3 md:py-2 px-10 md:px-8 ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              <span>Download Resume</span>
            </div>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mainscreen;