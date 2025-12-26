import React, { useEffect, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { cn } from "../lib/utils";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const experience = [
  {
    role: "Associate Software Engineer (DevOps / Platform)",
    company: "Infor",
    duration: "Jul 2023 – Present",
    highlights: [
      "Designed and operated AWS-based CI/CD pipelines using Jenkins, Docker, and Kubernetes, reducing deployment time by ~50% (from ~48 minutes to under 25 minutes).",
      "Embedded automated security scanning (OWASP ZAP, WAF) directly into CI pipelines, cutting manual security audit effort by ~90% and enabling early vulnerability detection.",
      "Built Python-based post-deployment validation and health-check tools, reducing manual verification effort by 60% and improving release confidence.",
      "Operated and maintained Kubernetes clusters, managing deployments, rollouts, scaling, and failure handling for highly available production workloads.",
      "Implemented centralized logging and observability using Sumo Logic, improving incident detection and reducing MTTR.",
      "Collaborated closely with backend teams to improve release reliability, rollback strategies, and operational readiness.",
      "Mentored junior engineers through code reviews and discussions on backend and DevOps best practices."
    ],
    tech: "AWS · Kubernetes · Docker · Jenkins · Python · Java · GitLab",
  },
  {
    role: "Junior Software Engineer",
    company: "Alverto Solutions",
    duration: "Nov 2022 – Jul 2023",
    highlights: [
      "Contributed to migrating monolithic components to microservices, improving scalability and resource utilization by ~50%.",
      "Integrated Spring Cloud Config for centralized and dynamic configuration management, significantly reducing deployment-related downtime.",
      "Optimized PostgreSQL queries through indexing and query refactoring, improving performance by ~45% for high-traffic workloads.",
      "Collaborated with frontend teams to integrate backend APIs with React-based UI components.",
    ],
    tech: "Java · Spring Boot · PostgreSQL · React · GitHub",
  },
  {
    role: "Software Engineer Intern",
    company: "Alverto Solutions",
    duration: "Jul 2022 – Nov 2022",
    highlights: [
      "Developed RESTful services using Spring Boot to support core application workflows.",
      "Implemented Spring Cloud Config for dynamic configuration updates, reducing downtime and manual restarts.",
      "Gained hands-on experience with production debugging, backend architecture, and collaborative development.",
    ],
    tech: "Java · Spring Boot · Git",
  },
];

const Experience = () => {
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
    <div className="relative flex flex-col items-center justify-center w-full py-20 px-4 bg-black">
      {/* Scroll Progress Line */}
      <div
        ref={scrollLineRef}
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-b from-neutral-200 to-neutral-500 w-0 z-50"
      />

      {/* Dot Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Mask */}
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Section Title */}
      <div className="relative z-10 mb-14 text-center">
        <h2 className="inline-block pb-2 text-3xl md:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Experience
        </h2>
      </div>

      {/* Experience Cards */}
      <div className="relative z-10 flex flex-col gap-10 w-full max-w-6xl px-4">
        {experience.map((exp, index) => (
            <CardContainer key={index} className="inter-var w-full">
            <CardBody className="bg-black/50 backdrop-blur-sm border border-white/[0.1] w-full h-auto rounded-2xl p-6 md:p-10 hover:border-white/[0.2] transition-colors">
                
                {/* Header Section */}
                <div className="flex flex-col gap-1">
                <CardItem
                    translateZ="50"
                    className="text-2xl md:text-4xl font-bold text-white tracking-tight"
                >
                    {exp.role}
                </CardItem>
                <CardItem
                    translateZ="40"
                    className="text-neutral-400 text-sm md:text-lg flex items-center gap-2"
                >
                    <span>{exp.company}</span>
                    <span className="text-neutral-600">•</span>
                    <span>{exp.duration}</span>
                </CardItem>
                </div>

                {/* Description List */}
                <CardItem
                translateZ="60"
                className="mt-8 text-neutral-300 text-sm md:text-base"
                >
                <ul className="space-y-4 list-none">
                    {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-500 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                    </li>
                    ))}
                </ul>
                </CardItem>

                {/* Footer / Tech Stack */}
                <div className="mt-10 pt-6 border-t border-white/[0.05]">
                <CardItem
                    translateZ="30"
                    className="flex flex-wrap gap-2 items-center"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    Tech Stack:
                    </span>
                    <div className="flex flex-wrap gap-x-3 text-xs md:text-sm text-neutral-400 italic">
                    {exp.tech.split(' · ').map((t, i) => (
                        <span key={i} className="hover:text-white transition-colors cursor-default">
                        {t}{i !== exp.tech.split(' · ').length - 1 && <span className="ml-3 text-neutral-700">/</span>}
                        </span>
                    ))}
                    </div>
                </CardItem>
                </div>
                
            </CardBody>
            </CardContainer>
        ))}
        </div>
    </div>
  );
};

export default Experience;