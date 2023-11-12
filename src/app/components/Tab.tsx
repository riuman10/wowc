import React from "react";

function Tab({left = false}) {
  return (
    <div className="flex h-[50px]"
    style={{
      backgroundColor: left ? "#000000" : `#292828`,
      // backgroundImage: `url("https://www.transparenttextures.com/patterns/green-dust-and-scratches.png")`,
    }}
    >
      <img src = "/emptySlot1.png" className="object-cover h-[30px] w-[200px]" />
      <div
        style={{
          backgroundColor: left ? "#000000" : "#292828",
          backgroundImage:`url("https://www.transparenttextures.com/patterns/nice-snow.png")`,
          borderTop : '2px groove black',
          borderLeft : '2px groove black',
          borderRight : '2px ridge black',
          borderBottom : '3px ridge #4f4f4d',
        }}
        className="h-full w-full border border-gray-700 rounded-xl shadow-inner shadow-gray-900"
      ></div>
    </div>
  );
}

export default Tab;
