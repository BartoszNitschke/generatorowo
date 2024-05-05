import React, { useRef, useContext } from "react";
import { FaHome } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdConstruction } from "react-icons/md";
import { CalculatorContext } from "../context/CalculatorContext";
import Calculator from "./Calculator";
import CompanyCalculator from "./CompanyCalculator";
import ConstructionCalculator from "./ConstructionCalculator";
import Results from "./Results";
import LoadingResults from "./LoadingResults";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform } from "framer-motion";

const TopContent = () => {
  const { setCalculatorType } = useContext(CalculatorContext);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgres = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgres = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div
      name="moje-zasilanie"
      className="w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#111111] md:flex flex-col justify-center items-center md:py-[80px] pt-[125px] pb-[40px]"
    >
      <motion.div
        ref={ref}
        style={{ scale: scaleProgres, opacity: opacityProgres }}
      >
        <h1 className="text-[#ebdb04] text-[48px] py-12 md:py-16 font-bold text-center">
          Moje zasilanie
        </h1>
        <div className="w-full flex md:flex-row flex-col justify-center md:gap-x-10 gap-y-8 md:gap-y-0">
          <Link to="moje-zasilanie" smooth={true} duration={500}>
            <div
              className="w-[85%] md:w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex md:flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-700 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300 select-none mx-auto md:mx-0 gap-x-4"
              onClick={() => setCalculatorType("home")}
            >
              <FaHome className="text-[128px] mt-4" />
              <div>
                <p className="mt-3 text-[24px] font-semibold">Dom</p>

                <p className="mt-3 font-semibold">Przykładowe sprzęty:</p>
                <p className="mt-2">Lodówka</p>
                <p className="mt-2">Mikrofalówka</p>
                <p className="mt-2">Komputer</p>
                <p className="mt-2 hidden md:block">Czajnik</p>
                <p className="mt-2 hidden md:block">Ekspres do kawy</p>
              </div>
            </div>
          </Link>

          <Link to="moje-zasilanie" smooth={true} duration={500}>
            <div
              className="w-[85%] md:w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex md:flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-700 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300 select-none mx-auto md:mx-0 gap-x-4"
              onClick={() => setCalculatorType("company")}
            >
              <HiOutlineOfficeBuilding className="text-[128px] mt-4" />
              <div>
                <p className="mt-3 text-[24px] font-semibold">Firma</p>

                <p className="mt-3 font-semibold">Przykładowe sprzęty:</p>
                <p className="mt-2">Drukarka</p>
                <p className="mt-2">Niszczarka</p>
                <p className="mt-2">Monitor</p>
                <p className="mt-2 hidden md:block">Czajnik</p>
                <p className="mt-2 hidden md:block">Ekspres do kawy</p>
              </div>
            </div>
          </Link>

          <Link to="moje-zasilanie" smooth={true} duration={500}>
            <div
              className="w-[85%] md:w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex md:flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-700 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300 select-none mx-auto md:mx-0 gap-x-4"
              onClick={() => setCalculatorType("construction")}
            >
              <MdConstruction className="text-[128px] mt-4" />
              <div>
                <p className="mt-3 text-[24px] font-semibold">Budowa</p>

                <p className="mt-3 font-semibold">Przykładowe sprzęty:</p>
                <p className="mt-2">Betoniarka</p>
                <p className="mt-2">Spawarka</p>
                <p className="mt-2">Młot wyburzeniowy</p>
                <p className="mt-2 hidden md:block">Szlifierka do tynków</p>
                <p className="mt-2 hidden md:block">Zgrzewarka do rur</p>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

const MojeZasilanie = () => {
  const { calculatorType, showResults } = useContext(CalculatorContext);

  return (
    <>
      {calculatorType === null && <TopContent />}
      {calculatorType === "home" && <Calculator />}
      {calculatorType === "company" && <CompanyCalculator />}
      {calculatorType === "construction" && <ConstructionCalculator />}
      {showResults === "true" && <Results />}
      {showResults === "loading" && <LoadingResults />}
    </>
  );
};

export default MojeZasilanie;
