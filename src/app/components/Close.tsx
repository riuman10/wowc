"use client"
import { useState } from "react";
import X from "./icons/X";

function Close() {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <img
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      src = "/buttonClose.png"
      className="md:h-6 md:w-6 w-3 h-3"
    >
    </img>
  );
}

export default Close;
