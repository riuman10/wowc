import React from "react";
import Avatar from "./Avatar";
import NameBox from "./NameBox";
import Close from "./Close";
import Button from "./Button";
import MedalPenal from "./MedalPenal";
import Tab from "./Tab";

function Panel() {
  return (
    <div className="w-[300px] min-h-[500px] bg-gradient-to-b from-[#262626] to-[#121212] rounded-lg relative">
      <div className="absolute -top-5 -left-5">
        <Avatar />
      </div>
      <div className="ml-[100px] flex">
        <NameBox />
        <Close />
      </div>
      <div
        style={{
          backgroundColor: `#0f0404`,
          backgroundImage:`url("https://www.transparenttextures.com/patterns/green-dust-and-scratches.png")`
          // backgroundColor: "hsla(164,0%,36%,1)",
          // backgroundImage:
          //   "radial-gradient(at 65% 31%, hsla(139,0%,23%,1) 0px, transparent 50%),radial-gradient(at 23% 5%, hsla(0,0%,23%,1) 0px, transparent 50%), radial-gradient(at 85% 10%, hsla(40,0%,16%,1) 0px, transparent 50%), radial-gradient(at 44% 99%, hsla(160,0%,25%,1) 0px, transparent 50%)",
        }}
        className="h-[66px] bg-gradient-to-t from-[#262626] to-[#121212]"
      />
      <div>
        <MedalPenal />
      </div>
      <div className="h-full bg-gray-900 p-2">
        <div className="flex flex-col gap-2 bg-black">
          <Tab />
          <Tab />
          <Tab />
          <Tab />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "hsla(164,0%,36%,1)",
          backgroundImage:
            "radial-gradient(at 65% 31%, hsla(139,0%,23%,1) 0px, transparent 50%),radial-gradient(at 23% 5%, hsla(0,0%,23%,1) 0px, transparent 50%), radial-gradient(at 85% 10%, hsla(40,0%,16%,1) 0px, transparent 50%), radial-gradient(at 44% 99%, hsla(160,0%,25%,1) 0px, transparent 50%)",
        }}
        className="h-[33px] rounded-b-xl flex gap-1 w-full"
      >
        <Button title="Trade" />
        <Button title="Cancel" />
      </div>
    </div>
  );
}

export default Panel;
