export default function MedalTab() {
    return (
      <div
        className="ring-1 ring-gray-400 hover:ring-yellow-200 h-full w-full transition-all duration-150 ease-out rounded-md px-4 flex items-center justify-center gap-2 cursor-pointer"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/green-dust-and-scratches.png")`,
          backgroundColor: "#18181B",
        }}
      >
        <p className="text-sm text-gray-50">23000</p>
        <div
          className="rounded-full h-3 w-3 bg-yellow-100"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(255,255,255, 0.25), rgba(255,255,255, 0.25) 1px, transparent 1px, transparent 6px)",
            backgroundSize: "4px 4px",
          }}
        ></div>
      </div>
    );
  }
  