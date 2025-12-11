import React from 'react';

interface Props {
  onPartClick: (sectionId: string) => void;
  activeSection: string | null;
}

const BacterialDiagram: React.FC<Props> = ({ onPartClick, activeSection }) => {
  
  const getFill = (id: string, defaultColor: string) => {
    return activeSection === id ? '#fbbf24' : defaultColor; // Amber-400 for highlight
  };

  const getStroke = (id: string, defaultColor: string) => {
      return activeSection === id ? '#b45309' : defaultColor;
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-center text-gray-500 text-sm mb-4 italic">Interactive Diagram - Click parts to learn more</h3>
      <svg viewBox="0 0 800 500" className="w-full h-auto cursor-pointer select-none">
        
        {/* Background Gradient Defs */}
        <defs>
          <linearGradient id="cytoplasmGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:'#fefce8', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#fef08a', stopOpacity:1}} />
          </linearGradient>
        </defs>

        {/* Flagella (External) */}
        <g onClick={() => onPartClick('external')} className="hover:opacity-80 transition-opacity">
           <path d="M 50,250 C 20,200 80,150 40,100" stroke={getFill('external', '#0d9488')} strokeWidth="4" fill="none" />
           <path d="M 50,250 C 10,280 60,320 20,380" stroke={getFill('external', '#0d9488')} strokeWidth="4" fill="none" />
           <path d="M 50,250 C 0,250 30,220 0,200" stroke={getFill('external', '#0d9488')} strokeWidth="4" fill="none" />
           <text x="20" y="80" fill="#0f766e" fontSize="14" fontWeight="bold">Flagella</text>
        </g>

        {/* Pili (External Hairs) */}
        <g onClick={() => onPartClick('external')}>
            {[...Array(20)].map((_, i) => {
                const angle = (i / 20) * Math.PI * 2;
                const r1 = 150; // Inner radius (surface)
                const r2 = 170; // Outer radius (tip)
                const cx = 400;
                const cy = 250;
                // Simple ellipse approximation for positions
                const x1 = cx + Math.cos(angle) * 300; 
                const y1 = cy + Math.sin(angle) * 150;
                const x2 = cx + Math.cos(angle) * 330;
                const y2 = cy + Math.sin(angle) * 170;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={getFill('external', '#99f6e4')} strokeWidth="2" />;
            })}
             <text x="720" y="100" fill="#0f766e" fontSize="14" fontWeight="bold">Pili/Fimbriae</text>
        </g>

        {/* Capsule (Outermost Layer) */}
        <ellipse 
            cx="400" cy="250" rx="310" ry="160" 
            fill={getFill('external', 'rgba(153, 246, 228, 0.3)')} 
            stroke={getStroke('external', '#2dd4bf')} 
            strokeWidth="3"
            onClick={() => onPartClick('external')}
            className="transition-colors duration-300"
        />
        <text x="400" y="70" textAnchor="middle" fill="#0f766e" fontSize="16" fontWeight="bold">Capsule</text>

        {/* Cell Wall */}
        <ellipse 
            cx="400" cy="250" rx="290" ry="145" 
            fill={getFill('cellwall', '#ffedd5')} 
            stroke={getStroke('cellwall', '#f97316')} 
            strokeWidth="5" 
            onClick={() => onPartClick('cellwall')}
             className="transition-colors duration-300"
        />
        <text x="400" y="115" textAnchor="middle" fill="#c2410c" fontSize="14" fontWeight="bold">Cell Wall</text>

        {/* Cytoplasmic Membrane */}
        <ellipse 
            cx="400" cy="250" rx="275" ry="135" 
            fill="url(#cytoplasmGrad)" 
            stroke={getStroke('membrane', '#22c55e')} 
            strokeWidth="3"
            onClick={() => onPartClick('membrane')}
             className="transition-colors duration-300"
        />
        <text x="400" y="380" textAnchor="middle" fill="#15803d" fontSize="14" fontWeight="bold">Cytoplasmic Membrane</text>

        {/* Mesosome (Invagination) */}
        <path 
            d="M 600,300 Q 580,280 620,260 T 600,240" 
            fill="none" 
            stroke={getStroke('membrane', '#15803d')} 
            strokeWidth="4" 
            onClick={() => onPartClick('membrane')}
        />
        <text x="630" y="280" fill="#15803d" fontSize="12">Mesosome</text>

        {/* Nucleoid (DNA) */}
        <g onClick={() => onPartClick('cytoplasm')}>
            <path 
                d="M 300,250 Q 350,200 400,250 T 500,250 T 400,300 T 300,250" 
                fill="none" 
                stroke={getFill('cytoplasm', '#8b5cf6')} 
                strokeWidth="6" 
                opacity="0.8"
            />
            <text x="350" y="250" fill="#6d28d9" fontSize="16" fontWeight="bold">Nucleoid (DNA)</text>
        </g>

        {/* Plasmids */}
        <g onClick={() => onPartClick('genetics')}>
            <circle cx="200" cy="200" r="15" fill="none" stroke={getFill('genetics', '#a855f7')} strokeWidth="3" />
            <circle cx="550" cy="180" r="10" fill="none" stroke={getFill('genetics', '#a855f7')} strokeWidth="3" />
            <text x="170" y="180" fill="#7e22ce" fontSize="12">Plasmid</text>
        </g>

        {/* Ribosomes (Dots) */}
        <g onClick={() => onPartClick('cytoplasm')}>
            {[...Array(30)].map((_, i) => (
                <circle 
                    key={i} 
                    cx={200 + Math.random() * 400} 
                    cy={150 + Math.random() * 200} 
                    r="3" 
                    fill={getFill('cytoplasm', '#ef4444')} 
                />
            ))}
            <text x="250" y="320" fill="#b91c1c" fontSize="12">Ribosomes</text>
        </g>

        {/* Spore (Internal representation for learning context, usually distinct phase) */}
        <g onClick={() => onPartClick('spores')}>
            <circle cx="580" cy="200" r="25" fill={getFill('spores', '#cbd5e1')} stroke="#475569" strokeWidth="2" opacity="0.6" />
             <text x="590" y="170" fill="#334155" fontSize="12">Endospore</text>
        </g>

      </svg>
    </div>
  );
};

export default BacterialDiagram;
