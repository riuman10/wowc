import React from "react";
import Avatar from "./Avatar";
import NameBox from "./NameBox";
import Close from "./Close";
import Button from "./Button";
import MedalPenal from "./MedalPenal";
import Tab from "./Tab";

function Panel({ closeButton = false, showButtons = false , left = false}) {
  return (
    <div className="border w-[250px] md:w-[300px] min-h-[500px] bg-gradient-to-b from-[#262626] to-[#121212] rounded-lg relative">
      <div className="absolute -top-5 -left-4">
        <div className="relative">
          {/* <div className="absolute top-0 right-0 bg-black h-2 w-2"></div> */}
          <Avatar />
        </div>
      </div>
      <div
        className="ml-[100px] flex"
        style={{
          backgroundColor: "#292828",
          backgroundImage: `url("https://www.transparenttextures.com/patterns/nice-snow.png`,
          borderBottom: "3px groove #27272A",
          borderLeft: "3px groove #27272A",
          borderTop: "3px ridge #27272A",
          borderRight: "3px ridge #27272A",
        }}
      >
        <NameBox />
        {closeButton ? <Close /> : " "}
      </div>
      <div
        style={{
          backgroundColor: left ? "#000000" : "#44403C",
          backgroundImage: `url("https://www.transparenttextures.com/patterns/nice-snow.png`,
          height: "66px",
        }}
      />
      <div>
        <MedalPenal />
      </div>
      <div
        className="h-full p-2"
        style={{
          backgroundColor: left  ? "#000000" : `#292828`,
          backgroundImage: `url("https://www.transparenttextures.com/patterns/green-dust-and-scratches.png")`,
        }}
      >
        <div className="flex flex-col  bg-red-100">
          <Tab left = {left}/>
          <Tab left = {left}/> <Tab left = {left}/> <Tab left = {left}/>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/felt.png"',
          borderTop: "3px ridge #27272A",
          borderLeft: "3px groove #27272A",
          borderRight: "3px ridge #27272A",
          borderBottom: "3px groove #27272A",
          boxShadow: "inset 0px 0px 5px 3px rgba(1,1,1,0.3)",
        }}
        className="h-[33px] rounded-lg flex w-full border"
      >
        {showButtons ? (
          <>
            <Button title="Trade" />
            <Button title="Cancel" />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Panel;
