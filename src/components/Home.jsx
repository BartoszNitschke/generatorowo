import React from "react";
import GeneratorPhoto from "../assets/mainpage_generator.png";
import { TypeAnimation } from "react-type-animation";
import HomePagePhoto from "../assets/homepage_generator.png";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen flex items-center bg-gradient-to-b from-[#000300] to-[#0a0a0a]"
    >
      <div className="w-[55%] h-screen text-white flex flex-col items-center justify-center">
        <h1 className="text-[60px] text-[#ebdb04] font-bold">
          ZASIL SIĘ JUŻ DZIŚ!
        </h1>
        <p className="text-[32px] mt-12 ">
          Indywidualne podejście do każdego klienta
        </p>
        <p className="text-[32px] mt-6 ">
          Zainstaluj generator na{" "}
          <TypeAnimation
            sequence={["DOMU", 1000, "FIRMIE", 1000, "BUDOWIE", 1000]}
            wrapper="span"
            speed={250}
            repeat={Infinity}
            className="text-[#ebdb04] font-semibold"
          />
        </p>
        <button className="mt-12 bg-[#ebdb04] text-[28px] px-16 py-3 rounded-xl text-gray-900 font-semibold shadow-lg shadow-gray-400 hover:scale-105 focus:outline-none">
          Katalog
        </button>
      </div>
      <div className="w-[45%] mt-[80px]">
        <img
          src={GeneratorPhoto}
          // Alternatively GeneratorPhoto, not yet decided in the production phase
          alt=""
          className="h-screen object-cover rounded-l-[200px]"
        />
      </div>
    </div>
  );
};

export default Home;
