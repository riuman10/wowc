"use client";
import { useState } from "react";

function Button({
  title = "Button",
  onClick = () => {},
  full = true
}) {
  const [isHovering , setIsHovering] = useState(false);
  return (
    <div className={`px-2 py-3 cursor-pointer flex items-center justify-center rounded-lg border-2  transition-all duration-250 ease-out ${full ? "w-full" : "w-min"}`}
    style = {{
     backgroundImage : isHovering ? 'radial-gradient(circle, #e52b2b, #8b0000)' : 'radial-gradient(circle, #8b0000, #8b0000)',
     borderTop : '2px ridge #ffb000',
     borderLeft : '2px groove #ffb000',
     borderRight : '2px ridge #ffb000',
     borderBottom : '2px groove #ffb000',
     boxShadow : 'inset 0px 0px 5px 3px rgba(1,1,1,0.3)'
    }}
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    onClick={() => onClick()}
    >
      <p className="text-sm text-yellow-400 text-shadow-[0_4px_8px_#6366f1]">{title}</p>
    </div>
  );
}

export default Button;
