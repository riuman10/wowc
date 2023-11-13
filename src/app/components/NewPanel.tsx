import Button from "./Button";
import Avatar from "./Avatar";
import useIsMobile from "../hooks/useIsMobile";
import Close from "./Close";
import Tab from "./Tab";

function NewPanel() {
  const isMobile = useIsMobile();

  let arr = [1, 2, 3, 4];
  return (
    <div className="relative">
      <img
        src={"/PanelTrade.png"}
        className="md:min-w-[500px] min-w-[375px] md:min-h-auto min-h-[60vh] relative object-cover"
      />
      <div className="absolute md:top-[22px] top-[15px] md:right-[15px] right-2">
        <Close />
      </div>
      <section className="absolute top-1 left-[5px] md:top-3 md:left-3 -z-10">
        <Avatar
          width={`${isMobile ? "70px" : "80px"}`}
          height={`${isMobile ? "70px" : "80px"}`}
        />
      </section>
      <section className="absolute top-1 right-[125px] md:top-2 md:right-[170px] -z-10">
        <Avatar
          width={`${isMobile ? "70px" : "80px"}`}
          height={`${isMobile ? "70px" : "80px"}`}
        />
      </section>
      <section className="absolute md:top-[100px] top-[75px] md:left-7 left-4 md:w-[215px] w-[170px] md:min-h-[30px] bg-gradient-to-b from-black to-gray-900 -z-10">
        <p>`</p>
      </section>
      <section className="absolute md:top-[100px] top-[75px] md:right-6 right-2 bg-gray-100 md:w-[215px] w-[170px]  md:min-h-[25px] bg-[url('/tex.png')] -z-10">
        <p>`</p>
      </section>
      <section className="absolute md:top-7 top-5 text-sm md:left-[95px] left-[70px] w-[120px] md:w-[160px] ">
        <p className="text-center text-yellow-400 text-xs md:text-xs text-[8px]">
          Mohamed
        </p>
      </section>
      <section className="absolute md:top-7 top-5 text-sm md:right-[65px] right-[30px] md:w-[90px] w-[95px] ">
        <p className="text-center text-yellow-400 text-xs md:text-xs text-[8px]">
          Ahmed
        </p>
      </section>

      <section className="absolute md:right-[28px] right-5 md:top-[150px] top-[110px] md:w-[205px] w-[155px]">
        <div className="flex flex-col gap-2">
          <Tab />
          <Tab />
          <Tab />
          <Tab />
        </div>
      </section>

      <div className="absolute bottom-10 md:bottom-14 w-[160px] md:w-[215px] md:left-7 left-5 bg-transparent h-16 md:h-[80px] p-1 rounded-sm">
        <p className="text-xs text-gray-300 p-1">Will not be traded</p>
      </div>
      <div className="absolute bottom-10 md:bottom-14 w-[160px] md:w-[215px] md:right-6 right-4 bg-transparent h-16 md:h-[80px] p-1 rounded-sm">
        <p className="text-xs text-gray-300 p-1">Will not be traded</p>
      </div>
      <section className="absolute md:bottom-[23px] bottom-4 md:right-[17px] right-[10px] z-10">
        <Button
          title="Trade"
          width={`${isMobile ? "80px" : "102px"}`}
          height={`${isMobile ? "20px" : "23px"}`}
        />
      </section>
      <section className="absolute md:bottom-[23px] bottom-4 md:right-[129px] right-[95px] z-10">
        <Button
          title="Cancel"
          width={`${isMobile ? "85px" : "108px"}`}
          height={`${isMobile ? "20px" : "23px"}`}
        />
      </section>
    </div>
  );
}

export default NewPanel;
