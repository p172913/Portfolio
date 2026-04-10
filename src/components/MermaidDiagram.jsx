import React, { useState, useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { motion, AnimatePresence } from 'framer-motion';
let chartCount = 0;

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'monospace',
  useMaxWidth: true,
  logLevel: 'error'
});

const MermaidDiagram = ({ chart }) => {
  const [svgCode, setSvgCode] = useState('');
  const [error, setError] = useState(false);
  const chartId = useRef(`mermaid-chart-${++chartCount}`);

  useEffect(() => {
    let isMounted = true;

    const renderChart = async () => {
      if (!chart) return;

      try {
        // Clear previous state
        setError(false);
        
        // 1. Validate syntax
        await mermaid.parse(chart);
        
        // 2. Render to SVG string
        const { svg } = await mermaid.render(chartId.current, chart);
        
        if (isMounted) {
          setSvgCode(svg);
        }
      } catch (err) {
        console.error("Mermaid Render Error:", err);
        if (isMounted) {
          setError(true);
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  return (
    <div className="w-full min-h-[120px] flex items-center justify-center bg-transparent overflow-x-auto custom-scrollbar scrolling-touch">
      <AnimatePresence mode="wait">
        {error ? (
          <motion.div 
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-2 py-8 text-neutral-500"
          >
            <span className="text-xs font-mono">Syntax Error in Diagram</span>
          </motion.div>
        ) : svgCode ? (
          <motion.div
            key="svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full flex justify-start md:justify-center"
            dangerouslySetInnerHTML={{ __html: svgCode }}
          />
        ) : (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-4 h-4 border-2 border-neutral-700 border-t-emerald-500 rounded-full animate-spin"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MermaidDiagram;
