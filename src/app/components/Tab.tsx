import React from "react";

function Tab({left = false}) {
  return (
    <div className="flex items-center h-[80px]"
    style={{
      backgroundColor: left ? "#000000" : `#292828`,
      backgroundImage: `url("https://www.transparenttextures.com/patterns/green-dust-and-scratches.png")`,
    }}
    >
      <div
      style={{
        borderTop : '2px groove #EAB308',
        borderLeft : '2px groove #EAB308',
        borderRight : '2px ridge #EAB308',
        borderBottom : '2px ridge #EAB308',
        borderRadius : '13px',
        boxShadow : 'inset 0px 0px 5px 3px black',
        width : '40%',
        height : '100%',
        padding : '0px'
      }}
      >
      <div
        className="w-full h-full rounded-lg hover:ring-blue-300 transition-all duration-300 ease-out"
        style={{
          backgroundColor: "#18181B",
          backgroundImage:`url("https://www.transparenttextures.com/patterns/ice-age.png")`,
          borderTop : '3px groove #27272A',
          borderLeft : '3px groove #27272A',
          borderRight : '3px ridge #27272A',
          borderBottom : '3px ridge #27272A',
        boxShadow : 'inset 0px 0px 5px 3px black',
          borderRadius : '9px',
        }}
      ></div>
      </div>
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
