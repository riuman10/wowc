"use client"
import { useState } from "react";
import X from "./icons/X";

function Close() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="bg-red-800 border border-gray-600 rounded-lg p-1 px-2 flex items-center justify-center cursor-pointer"
      style = {{
        backgroundImage : isHovering ? 'radial-gradient(circle, #e52b2b, #8b0000)' : 'radial-gradient(circle, #8b0000, #8b0000)',
        borderTop : '2px ridge #ffb000',
        borderLeft : '2px groove #ffb000',
        borderRight : '2px ridge #ffb000',
        borderBottom : '2px groove #ffb000',
        padding : '4px',
        paddingLeft : '8px',
        paddingRight : "8px",
        boxShadow : 'inset 0px 0px 5px 3px rgba(1,1,1,0.3)'
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <X />
    </div>
  );
}

export default Close;
