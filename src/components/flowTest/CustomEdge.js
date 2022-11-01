import React from 'react';

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
}) {
  return (
    <g>
      <path
        fill="none"
        stroke="#222"
        strokeWidth={1.5}
        className="animated"
        d={`
        M${sourceX},${sourceY} 
        L ${(sourceX>targetX)? ((sourceX-200<targetX-50)?sourceX-200 : targetX-50) : ((sourcePosition)=='right'?sourceX+50:sourceX-20)} ${sourceY}
        L ${(sourceX>targetX)? ((sourceX-200<targetX-50)?sourceX-200 : targetX-50)  : ((sourcePosition)=='right'?sourceX+50:sourceX-20)} ${targetY} 
        L ${(sourceX>targetX)? ((sourceX-200<targetX-50)?sourceX-200 : targetX-50)  : ((sourcePosition)=='right'?sourceX+50:sourceX-20)} ${targetY} 
        L ${targetX},${targetY}
        `}
      />
      <circle cx={targetX} cy={targetY} fill="#fff" r={3} stroke="#222" strokeWidth={1.5} />
    </g>
  );
}
