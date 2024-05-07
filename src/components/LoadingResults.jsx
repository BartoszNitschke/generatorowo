import React, { useEffect, useRef } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingResults = () => {
  const resultsRef = useRef(null);

  useEffect(() => {
    const options = {
      behavior: "smooth",
      block: "center", // Przewiń tak, aby element był na środku ekranu
    };

    resultsRef.current.scrollIntoView(options);
  }, []);

  return (
    <div
      ref={resultsRef}
      className="h-[300px] bg-gradient-to-b from-[#111111] to-[#111111] flex items-center justify-center pt-[80px]"
    >
      <AiOutlineLoading3Quarters className="text-white animate-spin text-[64px] font-semibold"></AiOutlineLoading3Quarters>
    </div>
  );
};

export default LoadingResults;
