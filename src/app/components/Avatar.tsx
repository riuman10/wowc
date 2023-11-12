import React from "react";

function Avatar({
  width = '75px',
  height = '75px'
}) {
  return (
    <img
      src="/avatar_url.jpg"
      className="object-cover h-[75px] w-[75px] rounded-full"
      style  = {{
        width : width,
        height : height
      }}
    />
  );
}

export default Avatar;
