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
        className="w-[500px] h-auto relative"
      />
      <div className="absolute top-6 right-4">
        <Close />
      </div>
      <section className="absolute md:top-7 top-4 text-sm md:left-[95px] left-10 w-[180px] md:w-[160px] ">
        <p className="text-center text-white text-xs">Abha</p>
      </section>

      <section className="absolute md:top-7 top-4 text-sm md:right-[45px] right-[30px] md:w-[120px] w-[100px] ">
        <p className="text-center text-white text-xs">Azhadh</p>
      </section>

      <section className="absolute top-2 left-2 md:top-3 md:left-3">
        <Avatar
          width={`${isMobile ? "60px" : "80px"}`}
          height={`${isMobile ? "60px" : "80px"}`}
        />
      </section>

      <section className="absolute top-2 right-[130px] md:top-2 md:right-[170px]">
        <Avatar
          width={`${isMobile ? "60px" : "80px"}`}
          height={`${isMobile ? "60px" : "80px"}`}
        />
      </section>

      <section className="absolute md:bottom-5 bottom-4 md:right-4 right-4">
        <Button width={`${isMobile ? "75px" : "105px"}`} title="Trade" />
      </section>

      <section className="absolute md:bottom-5 bottom-4 md:right-[130px] right-[100px]">
        <Button width={`${isMobile ? "80px" : "108px"}`} title="Cancel" />
      </section>
    </div>
  );
}

export default NewPanel;
