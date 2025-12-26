import React from 'react';
import { cn } from "../lib/utils";
import pic from "../assets/LFX_Avatar.jpg"

const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-neutral-800">
          <img
            src={pic}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me.
          </h1>
          <p className="text-lg leading-relaxed mb-4">
          DevOps / Software Engineer with 3+ years of experience building cloud-native systems using Kubernetes, AWS, Docker, and CI/CD pipelines. With hands-on production experience in automation, security, and observability. Passionate about reliable systems, clean architecture, and continuous improvement.
          </p>
          <p className="text-lg leading-relaxed mb-4">
          My work involves building production-ready pipelines, operating Kubernetes clusters, improving deployment reliability and observability directly into the software delivery lifecycle. 
          </p>
          <p className="text-lg leading-relaxed mb-4">
          Active contributor to kubernetes-client/python, kubernetes/kubernetes, minikube, and kubernetes/dashboard. Resolved real-world production issues related to proxy/NO PROXY handling, WebSocket behavior, SSL contexts,
          IPv6 binding, and Kubernetes client reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;