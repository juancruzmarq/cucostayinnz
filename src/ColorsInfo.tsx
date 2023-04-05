import React from "react";

export const ColorsInfo = () => {
  return (
    <div className="flex flex-row justify-center items-center md:gap-4 mt-5 rounded-lg space-x-5 md:space-x-10">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-3 h-3  md:w-5 md:h-5 rounded-full bg-green-primary"></div>
        <text className="text-white-primary">😁</text>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-3 h-3  md:w-5 md:h-5 rounded-full bg-blue-primary text-center justify-center align-middle justify-items-center"></div>
        <text className="text-white-primary">😐</text>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-3 h-3  md:w-5 md:h-5 rounded-full bg-red-primary"></div>
        <text className="text-white-primary">😭</text>
      </div>
    </div>
  );
};
