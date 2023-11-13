import React from "react";

function Tab({left = false}) {
  return (
    <div className="flex md:h-[50px] h-[40px] gap-[3px]"
    style={{
      // backgroundColor: left ? "#000000" : `#292828`,
      // backgroundImage: `url("https://www.transparenttextures.com/patterns/green-dust-and-scratches.png")`,
    }}
    >
      <img src = "/Slot.png" className="bg-transparent h-full" />
      <div
        style={{
          backgroundColor: left ? "#0d0d0d" : "#292828",
          backgroundImage: left ? '/tex.png' :`url("https://www.transparenttextures.com/patterns/nice-snow.png")`,
          boxShadow : left ? 'inset 0 0 5px #52525B' : 'inset 0 0 10px #0f0f0f'
        }}
        className="h-full w-full border-gray-700 rounded-lg shadow-inner"
      ></div>
    </div>
  );
}

export default Tab;
