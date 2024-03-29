import React from "react";
import GeneratorPhoto from "../assets/mainpage_generator.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen flex flex-col md:flex-row items-center bg-gradient-to-b from-[#000300] to-[#0a0a0a] md:py-[100px]"
    >
      <motion.div
        initial={{ y: -600 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.4 }}
        className="w-[90%] md:w-[55%] h-screen text-white flex flex-col items-center justify-center"
      >
        <h1 className="mt-16 md:mt-0 text-[32px] md:text-[60px] text-[#ebdb04] font-bold">
          ZASIL SIĘ JUŻ DZIŚ!
        </h1>
        <p className="text-[24px] md:text-[32px] mt-12 text-center">
          Indywidualne podejście do każdego klienta
        </p>
        <p className="text-[24px] md:text-[32px] mt-6 md:block hidden">
          Zainstaluj generator{" "}
          <TypeAnimation
            sequence={["w DOMU", 1000, "w FIRMIE", 1000, "na BUDOWIE", 1000]}
            wrapper="span"
            speed={250}
            repeat={Infinity}
            className="text-[#ebdb04] font-semibold"
          />
        </p>

        <p className="text-[24px] mt-6 md:hidden">Zainstaluj generator </p>
        <TypeAnimation
          sequence={["w DOMU", 1000, "w FIRMIE", 1000, "na BUDOWIE", 1000]}
          wrapper="span"
          speed={250}
          repeat={Infinity}
          className="text-[#ebdb04] font-semibold text-[24px] md:hidden"
        />

        <button className="hidden mt-10 relative md:inline-flex items-center justify-center w-[250px] h-[60px] text-[20px] p-4 px-6 py-3 overflow-hidden font-semibold  transition duration-300 ease-out border-2 rounded-full group">
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-jade group-hover:translate-y-0 ease">
            <svg
              width="45px"
              height="45px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z"
                fill="#ebdb04"
                stroke="#ebdb04"
                strokeWidth="0.5"
              />
              <path
                d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z"
                fill="#ebdb04"
                stroke="#ebdb04"
                strokeWidth="0.5"
              />
            </svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-jade transition-all duration-300 transform group-hover:translate-y-full ease">
            Katalog
          </span>
          {/* <span class="relative invisible"></span> */}
        </button>

        <button className="md:hidden mt-6 border-2 text-[24px] px-8 py-1 rounded-full">
          Katalog
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 1.4, ease: [0.32, 0, 0.75, 0] }}
        className="md:w-[45%] mt-3 md:mt-[80px]"
      >
        <img
          src={GeneratorPhoto}
          // Alternatively GeneratorPhoto, not yet decided in the production phase
          alt=""
          className="md:h-screen h-[43vh] object-cover md:rounded-l-[200px]  md:border-none"
        />
      </motion.div>
    </div>
  );
};

export default Home;
