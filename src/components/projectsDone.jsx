import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { cn } from "../lib/utils"; 
import { FaGithub } from 'react-icons/fa';
import Lenis from 'lenis';
import { useEffect,useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectImage from "./utils/ProjectImage";
import MathsGeekImg from '../assets/MathsGeek.jpg';
import Digisafe from '../assets/Digisafe.png';
import Coverter from '../assets/ConverterApp.jpg';
import Tradingbot from '../assets/Tradingbot.png';
import SocilaMediaApp from '../assets/SocilaMediaApp.png'
import BookStore from '../assets/BookStore.png'
import SeQRTCLI from '../assets/SeQRTCLI.jpeg'
const projects = [
  {
    title: "SecAuditHub — Security Auditing Platform",
    description:
      "Containerized CLI security auditing platform with automated scanners. Reduced vulnerability assessment time by 75%. Executed 40+ automated scans across container, network, and config layers.",
    image: SeQRTCLI, // Security placeholder
    metrics: "75% faster assessments · 40+ scans · CI automated",
    github: "https://github.com/SeQRT-hub/SecureAuditCLI",
    date: "Nov 2024 – Present",
    stack: "TypeScript · Node.js · Docker · GitHub Actions",
    architecturePlaceholder: true
  },
  {
    title: "MathsGeeks",
    description:
      "An AI-powered mathematics learning platform designed for personalized, engaging, and accessible learning.",
    image: MathsGeekImg,
    metrics: "AI Personalized · Adaptive Learning",
    architecturePlaceholder: true
  },
  {
    title: "Digisafe Vault App",
    description:
      "A secure digital vault for personal data protection, emphasizing privacy and user control.",
    image: Digisafe,
    metrics: "End-to-End Encryption · Vault Controls · Zero-Knowledge",
    architecturePlaceholder: true
  },
  {
    title: "Converter",
    description:
      "This is a modular, Python-based File Format Converter toolkit designed to handle a wide variety of file transformations commonly used in office, image, and document processing tasks.",
    image: Coverter,
    metrics: "Modular Toolkit · Multi-format Support · Batch Processing",
    architecturePlaceholder: true
  },
  {
    title: "Trading‑App",
    description:
      "A cross‑platform trading assistant app for Android (and desktops), built using Python and the Kivy framework (KV language for UI).",
    image: Tradingbot,
    metrics: "Cross-Platform Android/PC · Real-Time Stats · Kivy UI",
    architecturePlaceholder: true
  },
  {
    title: "BookStoreAPP",
    description:
      "A scalable, full‑stack Bookstore web application built entirely in TypeScript, providing a seamless shopping experience for book lovers.",
    image: BookStore,
    metrics: "Full-Stack TypeScript · Scalable Arch · Secure Auth",
    architecturePlaceholder: true
  },
];

const ProjectsDone = () => {

  const scrollLineRef = useRef(null);

  useEffect(() => {
    // Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 3.2, // Scroll animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true, // Enable smooth scrolling
    });

    // frame loop for Lenis boommm
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(scrollLineRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    
    <div className="relative flex flex-col items-center justify-center w-full py-20 px-4 bg-black">
      
      <div
        ref={scrollLineRef}
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-b from-neutral-200 to-neutral-500 w-0 z-50"
      ></div>

      {/* Dot Background Layer */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Mask Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Section Title */}
      <div className="relative z-10 mb-12 text-center">
        <h2 className="inline-block pb-2 text-3xl md:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Projects I worked on
        </h2>
        <p className="mt-4 text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
          Exploring new ideas, building app and here’s what I’ve built so far.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var h-full" containerClassName="py-4 h-full">
            <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-full sm:w-[35rem] h-auto min-h-[38rem] flex flex-col rounded-xl p-6 border">
              <div className="flex-grow">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 text-sm max-w-sm mt-2 font-light leading-relaxed"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              {project.metrics && (
                <CardItem translateZ="65" className="text-emerald-400 text-xs font-semibold mt-2">
                  {project.metrics}
                </CardItem>
              )}
              {project.architecturePlaceholder && (
                <CardItem translateZ="70" className="w-full mt-4 flex items-center justify-center border border-dashed border-neutral-700/50 rounded-lg p-4 bg-neutral-900/30">
                  <div className="flex flex-col items-center gap-2 opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-merge"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
                    <span className="text-xs font-mono text-center">Architecture Diagram Placeholder</span>
                    <span className="text-[10px] text-neutral-500 max-w-[200px] text-center">Insert Excalidraw/Mermaid diagram image here</span>
                  </div>
                </CardItem>
              )}
              </div>
              <CardItem translateZ="100" className="w-full mt-auto pt-4">
                <ProjectImage
                  image={project.image}
                  alt={project.title}
                  className="filter invert hue-rotate-180 rounded-lg shadow-xl" 
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <div>
      <a 
      href="https://github.com/p172913"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-7 ring-1 ring-white/10 ">
          <span>
            For More
          </span>
          <FaGithub className="h-6 w-6 text-white" />
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      </a>
      </div>

    </div>
  );
};

export default ProjectsDone;