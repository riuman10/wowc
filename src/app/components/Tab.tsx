import React from "react";

function Tab() {
  return (
    <div className="flex items-center gap-3 h-[80px] bg-black">
      <div
      style={{
        borderTop : '2px groove #4f4f4d',
        borderLeft : '2px groove #4f4f4d',
        borderRight : '2px ridge #4f4f4d',
        borderBottom : '2px ridge #4f4f4d',
        borderRadius : '13px',
        boxShadow : 'inset 0px 0px 5px 3px black',
        width : '40%',
        height : '100%',
        padding : '3px'
      }}
      >
      <div
        className="ring-2 ring-yellow-300 w-full h-full rounded-lg hover:ring-blue-300 transition-all duration-300 ease-out"
        style={{
          backgroundImage:`url("https://www.transparenttextures.com/patterns/ice-age.png")`
        }}
      ></div>
      </div>
      <div
        style={{
          backgroundColor: "#292828",
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
