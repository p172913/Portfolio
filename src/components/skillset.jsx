import React, { useRef, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiReact,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGitlab,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiRedis,
  SiPrometheus,
  SiGrafana,
  SiLinux,
  SiApachemaven,
  SiOpenjdk,
} from "react-icons/si";
import { FaAws, FaGithub, FaServer, FaShieldAlt, FaCogs, FaTerminal } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { cn } from "../lib/utils";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

/* =========================
   Skills Data (Resume-based)
========================= */

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: <SiOpenjdk /> },
      { name: "Python", icon: <SiPython /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Bash", icon: <FaTerminal /> },
    ],
  },
  {
    category: "Back-End & APIs",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "REST APIs", icon: <TbApi /> },
      { name: "Microservices", icon: <FaServer /> },
      { name: "Spring Cloud Config" },
    ],
  },
  {
    category: "Front-End (Working Knowledge)",
    items: [
      { name: "React JS", icon: <SiReact /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "React Native" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS (EC2, S3, Lambda, SQS, IAM)", icon: <FaAws /> },
      { name: "CloudFormation" },
    ],
  },
  {
    category: "Containers & Orchestration",
    items: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "kubectl" },
      { name: "K9s" },
    ],
  },
  {
    category: "CI/CD & Automation",
    items: [
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "GitHub Actions", icon: <FaGithub /> },
      { name: "GitLab CI", icon: <SiGitlab /> },
      { name: "CI/CD Pipelines", icon: <FaCogs /> },
    ],
  },
  {
    category: "Databases & Caching",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    category: "Observability",
    items: [
      { name: "Prometheus", icon: <SiPrometheus /> },
      { name: "Grafana", icon: <SiGrafana /> },
      { name: "Sumo Logic" },
    ],
  },
  {
    category: "Security & DevSecOps",
    items: [
      { name: "OWASP ZAP", icon: <MdSecurity /> },
      { name: "WAF", icon: <FaShieldAlt /> },
    ],
  },
  {
    category: "Version Control & Tooling",
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "Maven", icon: <SiApachemaven /> },
    ],
  },
];

/* =========================
   Component
========================= */

const SkillsDisplay = () => {
  const scrollLineRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

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

    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative w-full py-20 px-4 bg-black">
      {/* Scroll Progress */}
      <div
        ref={scrollLineRef}
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-b from-neutral-200 to-neutral-500 w-0 z-50"
      />

      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Header */}
      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Skills and Tools
        </h2>
        <p className="mt-4 text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
          From backend systems to cloud-native infrastructure — tools I use in production.
        </p>
      </div>

      {/* Cards */}
      {/* <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"> */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start max-w-7xl mx-auto">
        {skills.map((group, index) => (
          <CardContainer key={index} className="w-full py-0">
            {/* <CardBody className="bg-black border border-white/[0.15] rounded-xl p-6 min-h-[8rem] hover:shadow-2xl hover:shadow-emerald-500/[0.08] transition"> */}
            <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="40" className="text-lg font-semibold text-white mb-2">
                {group.category}
              </CardItem>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <CardItem
                    key={i}
                    translateZ="20"
                    className="flex items-center gap-2 text-sm text-neutral-300 bg-zinc-800 px-3 py-1.5 rounded-full hover:bg-zinc-700 transition"
                  >
                    {item.icon && <span className="text-base">{item.icon}</span>}
                    <span>{item.name}</span>
                  </CardItem>
                ))}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default SkillsDisplay;
