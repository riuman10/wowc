import MedalTab from "./MedalTab";

function MedalPenal() {
  return (
    <div
      className=" h-[35px] flex gap-[2px] w-full border border-gray-500 shadow-inner rounded-sm"
      style={{
        boxShadow: "0 6px 2px -2px gray",
        borderTop : '3px groove #27272A',
        borderLeft : '3px groove #27272A',
        borderRight : '3px ridge #27272A',
        borderBottom : '3px ridge #27272A',
      }}
    >
      <div className="ring-2 ring-gray-800 flex gap-[2px] w-full rounded-xl overflow-scroll">
        <MedalTab />
        <MedalTab />
        <MedalTab />
      </div>
    </div>
  );
}

export default MedalPenal;
