import React from 'react';
import { cn } from "../lib/utils";

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
            src="/LFX_Avatar.jpg"
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
            Software Engineer with expertise in Java, Python, Typescript, Spring Boot, React JS, and AWS. Proven experience in developing scalable applications, automating security scans, and optimizing system performance. Passionate about problem-solving, cloud technologies, and full-stack development. Seeking to contribute to a dynamic organization and drive technological innovation.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Contributed to the Kubernetes Python client by adding/enhancing functionality in PR#2372, PR#2390. Improved API usability and addressed key issues in the library. This involved writing Python functions to improve interaction with Kubernetes APIs and ensuring compatibility with existing features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;