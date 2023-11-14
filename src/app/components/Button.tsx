"use client";
import { useState } from "react";

function Button({
  title = "Button",
  onClick = () => {},
  width = '100px',
  height = "23px"
}) {
  const [isHovering , setIsHovering] = useState(false);
  return (
    <div className={`md:pt-[2px] pt-[1px] p-0 cursor-pointer flex items-center justify-center rounded-[4px] border-2  transition-all duration-250 ease-out`}
    style = {{
     backgroundImage : isHovering ? 'radial-gradient(circle, #e52b2b, #660202)' : 'radial-gradient(circle, #660202, #660202)',
     borderTop : '2px ridge #ffb000',
     borderLeft : '2px groove #ffb000',
     borderRight : '2px ridge #ffb000',
     borderBottom : '2px groove #ffb000',
     width : width,
     height : height,
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
