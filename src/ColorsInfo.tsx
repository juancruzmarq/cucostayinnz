interface ColorInfo {
  colorPicker: (color: string) => void;
}
export const ColorsInfo: React.FC<ColorInfo> = ({ colorPicker }: ColorInfo) => {
  return (
    <div className="flex flex-row justify-center items-center md:gap-4 mt-5 rounded-lg space-x-5 md:space-x-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <button
          onClick={() => colorPicker("MIN")}
          className=" bg-green-primary w-7 h-7 md:w-11 md:h-11 rounded-full shadow-md shadow-green-primary/30 border-white/60 border"
        >
          <text className="text-white-primary text-md md:text-2xl">😁</text>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <button
          onClick={() => colorPicker("MED")}
          className=" bg-blue-primary w-7 h-7 md:w-11 md:h-11 rounded-full shadow-md shadow-blue-primary/30 border-white/60 border"
        >
          <text className="text-white-primary  text-md md:text-2xl">😐</text>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <button
          onClick={() => colorPicker("MAX")}
          className=" bg-red-primary w-7 h-7 md:w-11 md:h-11 rounded-full shadow-md shadow-red-primary/30 border-white/60 border"
        >
          <text className="text-white-primary  text-md md:text-2xl">😭</text>
        </button>
      </div>
    </div>
  );
};
