// import React, { useRef } from "react";
// import { cn } from "../lib/utils";
// import { CardSpotlight } from "./ui/card-spotlight";
// import {
//   FaReact,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaPython,
// } from "react-icons/fa";
// import { SiTypescript } from "react-icons/si";

// const Skillset = () => {
//   const colors = [
//     [138, 43, 226],  // Purple
//     [147, 112, 219], // Light Purple
//     [186, 85, 211],  // Medium Purple
//     [153, 50, 204],  // Dark Purple
//     [218, 112, 214], // Orchid
//     [221, 160, 221], // Plum
//     [216, 191, 216], // Thistle
//     [128, 0, 128],   // Dark Magenta
//     [56, 189, 248],  // Tailwind-like Sky Blue
//     [70, 130, 180],  // Postgresql
//     [57, 255, 20],   // Three.js - Neon Green
//     [30, 41, 59],    //Next.js - Slate Blue
//     [255, 0, 128],   // Framer Motion - Vibrant Pink
//     [0, 199, 255],   // Figma - Vivid Cyan/Blue
//     [104, 160, 99],  // Node.js - Medium Green
//     [51, 51, 51],     // Express.js - Dark Gray
//     [255, 136, 0],    // Postman - Bright Orange
//     [242, 101, 34],   // Java - Logo Orange
//     [0, 201, 167],  //React Native - Bright Teal 
//   ];

//   const icons = [
//     <FaReact key="react" className="text-white text-xl" />,
//     <FaHtml5 key="html" className="text-white text-xl" />,
//     <FaCss3Alt key="css" className="text-white text-xl" />,
//     <FaJs key="js" className="text-white text-xl" />,
//     <SiTypescript key="ts" className="text-white text-xl" />,
//     <img
//       key="gsap"
//       src="/Gsap.png"
//       alt="Gsap"
//       className="w-9 h-9 p-1 object-contain"
//     />,
//     <FaPython key="python" className="text-white text-xl" />,
//     <img
//       key="flask"
//       src="/Flask.png"
//       alt="Flask"
//       className="w-9 h-9 p-1 object-contain"
//     />,
//     <img
//       key="tailwind"
//       src="/tailwind.png"
//       alt="Tailwind"
//       className="w-9 h-9 p-1 object-contain"
//     />,
//     <img
//       key="postgresql"
//       src="/postgresql.png"
//       alt="Postgresql"
//       className="w-9 h-9 p-1 object-contain"
//     />,
//     <img
//       key="three-js-logo"
//       src="/three-js-logo.png"
//       alt="three.js"
//       className="w-9 h-9 p-1 object-contain"
//     />,
//     <img
//       key="next-js-logo"
//       src="/next.png"
//       alt="Next.js"
//       className="w-15 h-15 p-1 object-contain"
//     />,
//     <img
//       key="motion_logo"
//       src="/motion_logo().png"
//       alt="motion"
//       className="w-15 h-15 p-1 object-contain"
//     />,
//     <img
//       key="figma_logo"
//       src="/figma_logo.png"
//       alt="figma"
//       className="w-13 h-12 p-1 object-contain"
//     />,
//     <img
//       key="NodeJS_logo"
//       src="/NodeJS_Logo.png"
//       alt="NodeJS"
//       className="w-13 h-12 p-1 object-contain"
//     />,
//     <img
//       key="ExpressJS_logo"
//       src="/ExpressJS_Logo.png"
//       alt="ExpressJS"
//       className="w-16 h-11 p-1 object-contain"
//     />,
//     <img
//       key="Postman_Logo"
//       src="/Postman_Logo.png"
//       alt="Postman"
//       className="w-15 h-15 p-1 object-contain"
//     />,
//     <img
//       key="Java_Logo"
//       src="/Java_Logo.png"
//       alt="Java"
//       className="w-13 h-14 px-1 pb-1 object-contain"
//     />,
//     <img
//       key="React_Native_Logo"
//       src="/react_native_logo.png"
//       alt="React_Native"
//       className="w-11 h-12 px-1 pb-1 object-contain"
//     />,
//   ];


//   return (
//     <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-12 sm:py-20 bg-black">
      
//       {/* Background Grid */}
//       <div
//         className={cn(
//           "absolute inset-0 z-0 pointer-events-none",
//           "[background-size:20px_20px]",
//           "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
//         )}
//       />

//       {/* Radial Mask */}
//       <div className="absolute inset-0 z-10 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

//       {/* Heading */}
//       <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-b from-neutral-300 to-neutral-500 bg-clip-text text-transparent z-20 mb-4 sm:mb-6">
//         Tools in My Arsenal
//       </h2>

//       {/* Icon Cards */}
//       <div className="relative z-20 flex justify-center gap-3 flex-wrap max-w-5xl w-full">
//       {icons.map((icon, index) => (
//         <CardSpotlight
//           key={index}
//           className="h-18 w-18 rounded-full flex items-center justify-center bg-black"
//           color={`rgb(${colors[index][0]}, ${colors[index][1]}, ${colors[index][2]})`}
//           onMouseEnter={() => handleMouseEnter(index)}
//           onClick={() => handleMouseEnter(index)}
//         >
//           <div className="relative z-20">
//             {icon}
//           </div>
//         </CardSpotlight>
//       ))}
//       </div>
//     </div>
//   );
// };

// export default Skillset;
import React,{useRef} from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaAws, FaGithub } from "react-icons/fa";
import {
  SiPython, SiCplusplus, SiTypescript, SiJavascript, SiC,
  SiReact, SiHtml5, SiCss3, SiSpringboot,  SiKubernetes,
  SiDocker, SiJenkins, SiPostgresql, SiMysql, SiGitlab, SiGit, SiGithub as SiGithubIcon,
} from "react-icons/si";
import { cn } from "../lib/utils";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java"},
      { name: "Python", icon: <SiPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "C", icon: <SiC /> },
    ],
  },
  {
    category: "Front-End",
    items: [
      { name: "React JS", icon: <SiReact /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    category: "Back-End",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "REST APIs" },
      { name: "Microservices" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2, S3, Lambda)", icon: <FaAws /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "CI/CD" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Security & Automation",
    items: [
      { name: "OWASP Security Scans" },
      { name: "Playwright" },
      { name: "Ethical Hacking" },
    ],
  },
  {
    category: "Version Control & Tools",
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithubIcon /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "SVN" },
    ],
  },
  {
    category: "Data Engineering & Observability",
    items: [
      { name: "AWS S3" },
      { name: "AWS Lambda" },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Sumo Logic" },
      { name: "K9s" },
    ],
  },
];

const SkillsDisplay = () => {
  const scrollLineRef = useRef(null);
  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 px-4 bg-black">
      
      <div
        ref={scrollLineRef}
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-b from-neutral-200 to-neutral-500 w-0 z-50"
      ></div>
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Skills and Tools
        </h2>
        <p className="mt-4 text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
          From backend APIs to cloud-native deployments — here’s a glimpse at my current toolkit.
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-8 gap-y-4">
        {skills.map((skillGroup, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-white/[0.2] h-[14rem] w-[20rem] rounded-xl p-6 border">
              <CardItem className="text-xl font-bold text-white mb-3">
                {skillGroup.category}
              </CardItem>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <CardItem key={i} className="flex items-center gap-2 text-sm text-neutral-300 bg-zinc-800 px-3 py-1 rounded-full">
                    {item.icon && <span className="text-lg">{item.icon}</span>}
                    {item.name}
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
