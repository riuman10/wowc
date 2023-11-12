import Button from "./Button";
import Avatar from "./Avatar";
import useIsMobile from "../hooks/useIsMobile";
import Close from "./Close";
import Tab from "./Tab";

function NewPanel() {
  const isMobile = useIsMobile();
  return (
    <div className="relative">
      <img
        src={"/PanelTrade.png"}
        className="md:min-w-[500px] min-w-[250px] h-auto relative object-cover z-10"
      />
      <div className="absolute md:top-[22px] top-[11px] md:right-[15px] right-2">
        <Close />
      </div>
      <section className="absolute md:top-7 top-3 text-sm md:left-[95px] left-12 w-[80px] md:w-[160px]">
        <p className="text-center text-white text-xs md:text-xs text-[8px]">Mohamed</p>
      </section>

      <section className="absolute md:top-7 top-3 text-sm md:right-[65px] right-[20px] md:w-[90px] w-[70px] ">
        <p className="text-center text-white text-xs md:text-xs text-[8px]">Ahmed</p>
      </section>

      <section className="absolute top-1 left-[5px] md:top-3 md:left-3">
        <Avatar
          width={`${isMobile ? "40px" : "80px"}`}
          height={`${isMobile ? "40px" : "80px"}`}
        />
      </section>

      <section className="absolute top-1 right-[85px] md:top-2 md:right-[170px]">
        <Avatar
          width={`${isMobile ? "40px" : "80px"}`}
          height={`${isMobile ? "40px" : "80px"}`}
        />
      </section>

      <section className="absolute md:bottom-[23px] bottom-4 md:right-[17px] right-2 z-10">
        <Button 
        title="Trade" 
        width={`${isMobile ? "55px" : "102px"}`} 
        />
      </section>

      <section className="absolute md:bottom-[23px] bottom-4 md:right-[129px] right-[64px] z-10">
        <Button 
        title="Cancel" 
        width={`${isMobile ? "55px" : "108px"}`} 
        />
      </section>
    </div>
  );
}

export default NewPanel;
