import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { cn } from "../lib/utils"; 
import { FaGithub } from 'react-icons/fa';
import Lenis from 'lenis';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const contributions = [
  {
    repo: "kubernetes-client/python",
    pr: "https://github.com/kubernetes-client/python/pull/2372, https://github.com/kubernetes-client/python/pull/2390",
    what: "Fixed proxy/NO_PROXY handling and WebSocket reliability for production Kubernetes clients",
    impact: "Resolved real-world connectivity issues affecting Python-based Kubernetes automation"
  },
  {
    repo: "kubernetes/minikube",
    pr: "https://github.com/kubernetes/minikube/pull/22085",
    what: "Fixed IPv6 binding and local cluster reliability",
    impact: "Improved dev environment stability for local k8s"
  },
  {
    repo: "kubestellar/docs",
    pr: "#https://github.com/kubestellar/docs/pull/1165",
    what: "Upstream fix for client reliability issue",
    impact: "Merged into core Kubernetes project"
  },
  {
    repo: "kubestellar/console",
    pr: "#https://github.com/kubestellar/console/pull/1368",
    what: "Added WasmCloud monitoring dashboard card",
    impact: "New observability feature for KubeStellar console"
  },
  {
    repo: "kubestellar/console-marketplace",
    pr: "#https://github.com/kubestellar/console-marketplace/pull/84",
    what: "Added WasmCloud monitoring dashboard card",
    impact: "New observability feature for KubeStellar console"
  }
];

const OpenSource = () => {

  const scrollLineRef = useRef(null);

  useEffect(() => {
    // Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 3.2,
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
          GitHub Contributions
        </h2>
        <p className="mt-1 text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
          Open Source Contributions and GitHub Stats.
        </p>
      </div>

      {/* GitHub Stats Row */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 mb-12 w-full max-w-7xl mx-auto px-4">
        {/* Stats Card */}
        <CardContainer className="inter-var group/card" containerClassName="py-4">
          <CardBody className="bg-black relative hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-full sm:w-[35rem] h-auto rounded-xl p-6 border flex items-center justify-center overflow-hidden">
            <CardItem translateZ="100" className="w-full">
              <img 
                src="https://github-readme-stats-mu-vert.vercel.app//api?username=p172913&show_icons=true&theme=tokyonight" 
                alt="GitHub Stats" 
                className="w-full h-auto rounded-lg"
              />
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Streak Card */}
        <CardContainer className="inter-var group/card" containerClassName="py-4">
          <CardBody className="bg-black relative hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-full sm:w-[35rem] h-auto rounded-xl p-6 border flex items-center justify-center overflow-hidden">
            <CardItem translateZ="100" className="w-full">
              <img 
                src="https://github-readme-streak-stats-eight.vercel.app/?user=p172913&theme=tokyonight" 
                alt="GitHub Streak" 
                className="w-full h-auto rounded-lg"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-8 mb-8">
        {contributions.map((item, index) => (
          <CardContainer key={index} className="inter-var" containerClassName="py-4">
            <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] w-full sm:w-[35rem] min-h-[14rem] h-auto rounded-xl p-6 border flex flex-col gap-4">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white flex items-center gap-2"
              >
                <FaGithub className="text-neutral-400" />
                {item.repo}
              </CardItem>
              
              <div className="space-y-3">
                <CardItem translateZ="30" className="text-sm">
                  <span className="text-white font-bold mr-2 text-base">PR:</span>
                  <span className="flex flex-wrap gap-2 inline-flex min-w-0">
                    {item.pr.split(',').map((link, i) => {
                      const cleanLink = link.trim().replace(/^#/, '');
                      const match = cleanLink.match(/\/pull\/(\d+)/);
                      const prNumber = match ? `#${match[1]}` : cleanLink;
                      const isUrl = cleanLink.startsWith('http');
                      
                      return isUrl ? (
                        <a 
                          key={i}
                          href={cleanLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium underline underline-offset-4 decoration-cyan-400/30"
                        >
                          {prNumber}
                        </a>
                      ) : (
                        <span key={i} className="text-neutral-300">{prNumber}</span>
                      );
                    })}
                  </span>
                </CardItem>
                
                <CardItem translateZ="40" className="text-neutral-300 text-sm leading-relaxed">
                  <span className="text-white font-bold mr-2 text-base">What:</span> {item.what}
                </CardItem>
                
                <CardItem translateZ="50" className="text-neutral-400 text-sm italic py-2 border-t border-white/5 mt-2">
                   <span className="text-white font-bold not-italic mr-2 text-base">Impact:</span> {item.impact}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div>
        <a 
          href="https://github.com/p172913"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-base font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-7 ring-1 ring-white/10">
            <span>For More</span>
            <FaGithub className="h-6 w-6 text-white" />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </a>
      </div>

    </div>
  );
};

export default OpenSource;
