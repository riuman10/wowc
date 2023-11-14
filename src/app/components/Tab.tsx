import React from "react";

function Tab({
  left = false,
  title = "",
  emptySlot = false,
  textColor = "#D4D4D8"
}) {
  return (
    <div className="flex md:h-[50px] h-[40px] gap-[3px]">
      {
        emptySlot ? (
          <img src = "/Slot.png" className="bg-transparent h-full" />
        ) : (
          <>
          <img src = "/EmptySlot.png" className="bg-black relative"/>
            <div className="absolute bg-blue-600 shadow-2xl md:left-3 left-2 mt-2 z-10 rounded-full h-6 w-6"></div>
          <p className="absolute md:left-6 left-5 md:mt-7 mt-5 z-20 text-white md:text-sm text-xs">30</p>
          </>
        )
      }
      <div
        style={{
          backgroundColor: left ? "#0d0d0d" : "#292828",
          backgroundImage: left ? '/tex.png' :`url("https://www.transparenttextures.com/patterns/nice-snow.png")`,
          boxShadow : left ? 'inset 0 0 5px #52525B' : 'inset 0 0 10px #0f0f0f'
        }}
        className="h-full w-full border-gray-700 rounded-lg shadow-inner md:py-2 py-1 px-2"
      >
        <p
        className="md:text-xs text-[10px] md:w-[100px] w-[80px] shadow-lg"
        style = {{
          color : `${textColor}`
        }}
        >{title}</p>
      </div>
    </div>
  );
}

export default Tab;
