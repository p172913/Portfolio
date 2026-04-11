import React, { useState } from 'react';

/**
 * Renders Mermaid diagrams as SVG images via the free mermaid.ink service.
 * This avoids all Mermaid dynamic import / code-splitting issues on GitHub Pages.
 */
const MermaidDiagram = ({ chart }) => {
  const [error, setError] = useState(false);

  if (!chart) return null;

  // Prepend dark theme config, then base64 encode for the mermaid.ink URL
  const themedChart = `%%{init: {'theme': 'dark', 'themeVariables': {'primaryColor': '#1a1a2e', 'primaryTextColor': '#e0e0e0', 'lineColor': '#10b981', 'secondaryColor': '#16213e'}}}%%\n${chart}`;
  const encoded = btoa(unescape(encodeURIComponent(themedChart)));
  const svgUrl = `https://mermaid.ink/svg/${encoded}`;

  if (error) {
    return (
      <div className="flex flex-col items-center gap-2 py-6 text-neutral-500">
        <span className="text-xs font-mono">Diagram unavailable</span>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[120px] flex items-center justify-center bg-transparent overflow-x-auto">
      <img
        src={svgUrl}
        alt="Architecture Diagram"
        className="max-w-full h-auto"
        style={{ filter: 'invert(0)', minHeight: '100px' }}
        onError={() => setError(true)}
        loading="lazy"
      />
    </div>
  );
};

export default MermaidDiagram;
