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
        className="md:min-w-[500px] min-w-[250px] h-auto relative object-cover"
      />
      <div className="absolute md:top-6 top-[11px] md:right-4 right-2">
        <Close />
      </div>
      <section className="absolute md:top-7 top-3 text-sm md:left-[95px] left-12 w-[80px] md:w-[160px]">
        <p className="text-center text-white text-xs md:text-xs text-[8px]">Abha</p>
      </section>

      <section className="absolute md:top-7 top-3 text-sm md:right-[45px] right-[20px] md:w-[80px] w-[70px] ">
        <p className="text-center text-white text-xs md:text-xs text-[8px]">Azhadh</p>
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

      <section className="absolute md:bottom-5 bottom-2 md:right-4 right-2">
        <Button width={`${isMobile ? "55px" : "105px"}`} title="Trade" />
      </section>

      <section className="absolute md:bottom-5 bottom-2 md:right-[130px] right-[64px]">
        <Button width={`${isMobile ? "55px" : "108px"}`} title="Cancel" />
      </section>
    </div>
  );
}

export default NewPanel;
