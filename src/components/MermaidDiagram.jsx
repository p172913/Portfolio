import React, { useState, useEffect, useId } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'monospace',
  suppressErrorRendering: true,
});

const MermaidDiagram = ({ chart }) => {
  const [svgCode, setSvgCode] = useState('');
  const [error, setError] = useState(false);
  const reactId = useId();
  // Create a DOM-safe ID (remove colons from React's useId)
  const safeId = `mermaid-${reactId.replace(/:/g, '-')}`;

  useEffect(() => {
    let cancelled = false;

    const renderChart = async () => {
      if (!chart) return;

      try {
        setError(false);
        setSvgCode('');

        // Clean up the chart string: trim each line to remove template literal indentation
        const cleanedChart = chart
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0)
          .join('\n');

        // Remove any leftover container from a previous render
        const oldEl = document.getElementById(safeId);
        if (oldEl) oldEl.remove();

        const { svg } = await mermaid.render(safeId, cleanedChart);

        if (!cancelled) {
          setSvgCode(svg);
        }
      } catch (err) {
        console.error('Mermaid render error for', safeId, ':', err);
        if (!cancelled) {
          setError(true);
        }
      }
    };

    // Small delay to avoid race conditions between multiple diagrams
    const timer = setTimeout(renderChart, 100);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [chart, safeId]);

  return (
    <div className="w-full min-h-[120px] flex items-center justify-center bg-transparent overflow-x-auto">
      {error ? (
        <div className="flex flex-col items-center gap-2 py-8 text-neutral-500">
          <span className="text-xs font-mono">Diagram unavailable</span>
        </div>
      ) : svgCode ? (
        <div
          className="w-full flex justify-center [&_svg]:max-w-full"
          dangerouslySetInnerHTML={{ __html: svgCode }}
        />
      ) : (
        <div className="w-4 h-4 border-2 border-neutral-700 border-t-emerald-500 rounded-full animate-spin" />
      )}
    </div>
  );
};

export default MermaidDiagram;
