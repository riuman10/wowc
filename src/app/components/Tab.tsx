import React from "react";

function Tab({
  left = false,
  title = "",
  emptySlots = false
}) {
  return (
    <div className="flex md:h-[50px] h-[40px] gap-[3px]">
      {
        emptySlots ? (
          <img src = "/Slot.png" className="bg-transparent h-full" />
        ) : (
          <>
          <img src = "/EmptySlot.png" className="bg-black relative"/>
          <p className="absolute bg-blue-600 shadow-2xl left-3 mt-2 z-10 rounded-full h-6 w-6"></p>
          <p className="absolute left-6 mt-6 z-20 text-white">30</p>
          </>
        )
      }
      <div
        style={{
          backgroundColor: left ? "#0d0d0d" : "#292828",
          backgroundImage: left ? '/tex.png' :`url("https://www.transparenttextures.com/patterns/nice-snow.png")`,
          boxShadow : left ? 'inset 0 0 5px #52525B' : 'inset 0 0 10px #0f0f0f'
        }}
        className="h-full w-full border-gray-700 rounded-lg shadow-inner p-2"
      >
        <p className="text-xs text-gray-300">{title}</p>
      </div>
    </div>
  );
}

export default Tab;
