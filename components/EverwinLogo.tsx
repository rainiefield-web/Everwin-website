
import React from 'react';

export const EverwinLogo: React.FC<{ className?: string }> = ({ className }) => {
  // Official Brand Colors
  const darkBlue = "#006996";
  const lightBlue = "#009DDC"; // Cyan tone for bottom loop to match visual
  const green = "#8CC63F";
  
  // Stroke configuration for the knot
  const strokeWidth = 11;
  const radius = 12;
  const length = 22; // Length of the straight segments
  const gap = 13;    // Distance from center to the line

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 320 80" 
      className={className}
      aria-label="Everwin Industrial Park Logo"
      role="img"
    >
      {/* LOGO ICON GROUP */}
      <g transform="translate(40, 40)">
        {/* Rotate the entire knot 45 degrees */}
        <g transform="rotate(45)">
          
          {/* 
            GEOMETRY: 
            4 U-shaped loops interlocking.
            Coordinates are relative to center (0,0).
            'gap' defines the offset of the parallel lines from the center axis.
          */}

          {/* --- BASE LAYERS --- */}

          {/* 1. LEFT LOOP (Green) - Facing Left */}
          {/* Top leg at y=-gap, Bottom leg at y=gap. Connects at x=-length */}
          <path 
            d={`M -${gap} -${gap} L -${length} -${gap} A ${radius} ${radius} 0 0 0 -${length} ${gap} L -${gap} ${gap}`} 
            fill="none" 
            stroke={green} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
          />

          {/* 2. RIGHT LOOP (Green) - Facing Right */}
          {/* Top leg at y=-gap, Bottom leg at y=gap. Connects at x=length */}
          <path 
            d={`M ${gap} -${gap} L ${length} -${gap} A ${radius} ${radius} 0 0 1 ${length} ${gap} L ${gap} ${gap}`} 
            fill="none" 
            stroke={green} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
          />

          {/* 3. TOP LOOP (Dark Blue) - Facing Up */}
          {/* Left leg at x=-gap, Right leg at x=gap. Connects at y=-length */}
          <path 
            d={`M -${gap} -${gap} L -${gap} -${length} A ${radius} ${radius} 0 0 1 ${gap} -${length} L ${gap} -${gap}`} 
            fill="none" 
            stroke={darkBlue} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
          />

          {/* 4. BOTTOM LOOP (Light Blue/Cyan) - Facing Down */}
          {/* Left leg at x=-gap, Right leg at x=gap. Connects at y=length */}
          <path 
            d={`M -${gap} ${gap} L -${gap} ${length} A ${radius} ${radius} 0 0 0 ${gap} ${length} L ${gap} ${gap}`} 
            fill="none" 
            stroke={lightBlue} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
          />

          {/* --- WEAVE PATCHES (To create Over/Under effect) --- */}
          
          {/* 
             Cycle:
             Top-Left Intersection: Blue OVER Green (Already correct by order: Blue(3) drawn after Green(1))
             Top-Right Intersection: Green OVER Blue (Need Patch: Green Right over Blue Top)
             Bottom-Right Intersection: Cyan OVER Green (Already correct by order: Cyan(4) drawn after Green(2))
             Bottom-Left Intersection: Green OVER Cyan (Need Patch: Green Left over Cyan Bottom)
          */}

          {/* PATCH 1: Green Right Leg going over Blue Top Leg at (+gap, -gap) */}
          <path 
            d={`M ${gap} -${gap + 5} L ${gap} -${gap - 5}`} 
            fill="none" 
            stroke={green} 
            strokeWidth={strokeWidth} 
            strokeLinecap="butt" 
          />

          {/* PATCH 2: Green Left Leg going over Cyan Bottom Leg at (-gap, +gap) */}
          <path 
            d={`M -${gap} ${gap - 5} L -${gap} ${gap + 5}`} 
            fill="none" 
            stroke={green} 
            strokeWidth={strokeWidth} 
            strokeLinecap="butt" 
          />

        </g>
      </g>

      {/* TEXT GROUP */}
      <g transform="translate(90, 0)">
        {/* EVERWIN */}
        <text 
            x="0" 
            y="42" 
            fontFamily="'Inter', 'Roboto', 'Helvetica', sans-serif" 
            fontWeight="800" 
            fontSize="36" 
            fill={darkBlue}
            style={{ letterSpacing: '-1px' }}
        >
            EVERWIN
        </text>
        {/* INDUSTRIAL PARK */}
        <text 
            x="2" 
            y="62" 
            fontFamily="'Inter', 'Roboto', 'Helvetica', sans-serif" 
            fontWeight="600" 
            fontSize="13" 
            fill={darkBlue}
            style={{ letterSpacing: '1.5px' }}
        >
            INDUSTRIAL PARK
        </text>
      </g>
    </svg>
  );
};
