"use client";
import { useState } from "react";

function Button({
  title = "Button",
  onClick = () => {},
  width = '100px'
}) {
  const [isHovering , setIsHovering] = useState(false);
  return (
    <div className={`md:px-[3px] px-[0px] py-[0px] md:py-[3px] cursor-pointer flex items-center justify-center rounded-[4px] border-2  transition-all duration-250 ease-out`}
    style = {{
     backgroundImage : isHovering ? 'radial-gradient(circle, #e52b2b, #8b0000)' : 'radial-gradient(circle, #8b0000, #8b0000)',
     borderTop : '2px ridge #ffb000',
     borderLeft : '2px groove #ffb000',
     borderRight : '2px ridge #ffb000',
     borderBottom : '2px groove #ffb000',
     width : width,
     boxShadow : 'inset 0px 0px 5px 3px rgba(1,1,1,0.3)'
    }}
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    onClick={() => onClick()}
    >
      <p className="md:text-xs text-[8px] text-yellow-400 text-shadow-[0_4px_8px_#6366f1]">{title}</p>
    </div>
  );
}

export default Button;
