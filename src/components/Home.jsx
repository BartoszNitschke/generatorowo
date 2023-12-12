import React from "react";
import GeneratorPhoto from "../assets/mainpage_generator.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="w-full h-screen flex items-center bg-gradient-to-r from-[#000300] to-[#292929]">
      <div className="w-[55%] h-screen text-white flex flex-col items-center justify-center">
        <h1 className="text-[64px] text-[#ebdb04] font-bold">
          ZASIL SIĘ JUŻ DZIŚ!
        </h1>
        <p className="text-[36px] mt-12 ">
          Indywidualne podejście do każdego klienta
        </p>
        <p className="text-[36px] mt-6 ">
          Zainstaluj generator na{" "}
          <TypeAnimation
            sequence={["DOMU", 1000, "GARAŻU", 1000, "FIRMIE", 1000]}
            wrapper="span"
            speed={250}
            repeat={Infinity}
            className="text-[#ebdb04] font-semibold"
          />
        </p>
        <button className="mt-12 bg-[#ebdb04] text-[28px] px-16 py-3 rounded-xl text-gray-900 font-semibold shadow-2xl shadow-gray-400 hover:scale-105 focus:outline-none">
          Katalog
        </button>
      </div>
      <div className="w-[45%] mt-[100px]">
        <img
          src={GeneratorPhoto}
          alt=""
          className="w-full h-screen object-cover rounded-l-[300px]"
        />
      </div>
    </div>
  );
};

export default Home;