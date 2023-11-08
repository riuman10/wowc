import MedalTab from "./MedalTab";

function MedalPenal() {
  return (
    <div className="bg-black h-[35px] flex gap-[2px] max-w-[300px] py-1 px-1 border border-gray-600 shadow-inner rounded-sm">
      <MedalTab />
      <MedalTab />
      <MedalTab />
    </div>
  );
}

export default MedalPenal;
