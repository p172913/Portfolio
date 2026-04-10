import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'monospace',
  useMaxWidth: true, // Enable responsive scaling
});

const MermaidDiagram = ({ chart }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (chart && ref.current) {
      const id = `mermaid-${Math.random().toString(36).substring(7)}`;
      // Clear previous content to avoid duplicate rendering
      ref.current.innerHTML = '';
      mermaid.render(id, chart).then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
          // Apply manual sizing fix for mobile if needed
          const svgElement = ref.current.querySelector('svg');
          if (svgElement) {
            svgElement.style.maxWidth = '100%';
            svgElement.style.height = 'auto';
          }
        }
      }).catch(err => console.error("Mermaid parsing error:\n", err));
    }
  }, [chart]);

  return (
    <div 
      ref={ref} 
      className="overflow-x-auto overflow-y-hidden flex justify-start md:justify-center w-full min-h-[120px] items-center custom-scrollbar"
      style={{ WebkitOverflowScrolling: 'touch' }}
    />
  );
};

export default MermaidDiagram;
