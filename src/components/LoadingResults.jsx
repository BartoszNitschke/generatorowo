import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingResults = () => {
  return (
    <div className="h-[300px] bg-gradient-to-b from-[#111111] to-[#131313] flex items-center justify-center pt-[80px]">
      <AiOutlineLoading3Quarters className="text-white animate-spin text-[64px] font-semibold"></AiOutlineLoading3Quarters>
    </div>
  );
};

export default LoadingResults;
