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
  SiTerraform,
} from "react-icons/si";
import { FaAws, FaGithub, FaServer, FaShieldAlt, FaCogs, FaTerminal } from "react-icons/fa";
import { TbApi, TbCertificate } from "react-icons/tb";
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
    category: "Cloud & Infrastructure",
    items: [
      { name: "AWS (EC2, S3, Lambda, SQS, IAM)", icon: <FaAws /> },
      { name: "AWS CloudFormation", icon: <FaAws /> },
      { name: "Terraform", icon: <SiTerraform /> },
    ],
  },
  {
    category: "Containers & Orchestration",
    items: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "kubectl", icon: <SiKubernetes /> },
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
    category: "Programming Languages",
    items: [
      { name: "Python", icon: <SiPython /> },
      { name: "Bash", icon: <FaTerminal /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <SiOpenjdk /> },
    ],
  },
  {
    category: "Observability",
    items: [
      { name: "Prometheus", icon: <SiPrometheus /> },
      { name: "Grafana", icon: <SiGrafana /> },
      { name: "Sumo Logic" },
      { name: "k9s", icon: <SiKubernetes /> },
    ],
  },
  {
    category: "Security & DevSecOps",
    items: [
      { name: "OWASP ZAP", icon: <MdSecurity /> },
      { name: "WAF", icon: <FaShieldAlt /> },
      { name: "Veracode", icon: <MdSecurity /> },
      { name: "Qualys", icon: <FaShieldAlt /> },
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
  {
    category: "Back-End & APIs",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "REST APIs", icon: <TbApi /> },
      { name: "Microservices", icon: <FaServer /> },
      { name: "Spring Cloud Config", icon: <SiSpringboot /> },
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
    category: "Front-End (Working Knowledge)",
    items: [
      { name: "React JS", icon: <SiReact /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "React Native", icon: <SiReact /> },
    ],
  },
  {
    category: "Cloud & DevOps Certs",
    items: [
      { name: "DevOps on AWS (Coursera)", icon: <TbCertificate />, link: "https://coursera.org/share/f64c645ce6ba5a7116e009a84fb591bb" },
      { name: "AWS Essentials (Coursera)", icon: <TbCertificate />, link: "https://coursera.org/share/5fca237b7c7400c97aad8745162c9c29" },
      { name: "DevOps: Release & Deploy (Coursera)", icon: <TbCertificate />, link: "https://coursera.org/share/143adb5b3c100e6a1d3add389edb1079" },
      { name: "Oracle Cloud Developer (Oracle)", icon: <TbCertificate />, link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=410E83ECCBD56190AA6172C1A46B82783A252F85C15A127755C389B2F789AF99" },
    ],
  },
  {
    category: "Cybersecurity Certs",
    items: [
      { name: "Cybersecurity Fundamentals (IBM)", icon: <TbCertificate />, link: "https://www.credly.com/badges/b68cdd06-e8c4-4021-b142-ea194634ba07/public_url" },
      { name: "Intro to Cybersecurity (CISCO)", icon: <TbCertificate />, link: "https://www.credly.com/badges/30e63dac-4f93-4f4b-a1e3-b2f73b23eae0/public_url" },
      { name: "Ethical Hacking (Udemy)", icon: <TbCertificate />, link: "https://www.udemy.com/certificate/UC-600d7aa0-29d5-419d-9bd9-eb4d0fb31069/" },
    ],
  },
  {
    category: "Data & AI Certs",
    items: [
      { name: "CS50 AI (Harvard)", icon: <TbCertificate />, link: "https://cs50.harvard.edu/certificates/3a47156d-2c2e-47cc-94b3-46ad0fbbc16c" },
      { name: "Big Data Computing (NPTEL)", icon: <TbCertificate />, link: "https://drive.google.com/file/d/1sRwQ0kGrnDhtwtNKmdBx9d4XcgkWFDSl/view?usp=sharing" },
      { name: "Machine Learning (Coursera)", icon: <TbCertificate />, link: "https://coursera.org/share/bceeefc1d6a9f077a128ec5416ad6e20" },
      { name: "MongoDB Basics (Credly)", icon: <TbCertificate />, link: "https://www.credly.com/earner/earned/badge/a1ae8e9e-d81e-48e5-a5b3-e5783da36a0d" },
    ],
  },
  {
    category: "Programming Certs",
    items: [
      { name: "Problem Solving (HackerRank)", icon: <TbCertificate />, link: "https://www.hackerrank.com/certificates/7e80e9d9deaf" },
      { name: "Python (HackerRank)", icon: <TbCertificate />, link: "https://www.hackerrank.com/certificates/53d64cb2403e" },
      { name: "Java (HackerRank)", icon: <TbCertificate />, link: "https://www.hackerrank.com/certificates/fbc5fddbfb62" },
      { name: "React JS (HackerRank)", icon: <TbCertificate />, link: "https://www.hackerrank.com/certificates/3d1ebb52fba9" },
    ],
  },
  {
    category: "Misc",
    items: [
      { name: "Software Engineer (HackerRank)", icon: <TbCertificate />, link: "https://www.hackerrank.com/certificates/b76b6513ab5a" },
    ]

  }
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
          <CardContainer key={index} className="w-full" containerClassName="py-4 h-full">
            <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-auto sm:w-[30rem] min-h-[14rem] h-auto rounded-xl p-6 border flex flex-col items-start">
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
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-inherit no-underline pr-1">
                        {item.icon && <span className="text-base text-emerald-400">{item.icon}</span>}
                        <span>{item.name}</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2">
                        {item.icon && <span className="text-base text-neutral-400">{item.icon}</span>}
                        <span>{item.name}</span>
                      </div>
                    )}
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
