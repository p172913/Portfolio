import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'monospace',
});

const MermaidDiagram = ({ chart }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (chart && ref.current) {
      const id = `mermaid-${Math.random().toString(36).substring(7)}`;
      mermaid.render(id, chart).then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
        }
      }).catch(err => console.error("Mermaid parsing error:\n", err));
    }
  }, [chart]);

  return <div ref={ref} className="overflow-x-auto overflow-y-hidden flex justify-center w-full min-h-[150px] items-center" />;
};

export default MermaidDiagram;
