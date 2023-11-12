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
      className="h-6 w-6"
    >
    </img>
  );
}

export default Close;
