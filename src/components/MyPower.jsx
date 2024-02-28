import React, { useRef, useState, useContext } from "react";
import { FaHome, FaChevronDown, FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdConstruction, MdDelete } from "react-icons/md";
import { CalculatorContext } from "../context/CalculatorContext";
import Calculator from "./Calculator";
import CompanyCalculator from "./CompanyCalculator";
import ConstructionCalculator from "./ConstructionCalculator";
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
      className="w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#131313] flex flex-col justify-center items-center"
    >
      <motion.div
        ref={ref}
        style={{ scale: scaleProgres, opacity: opacityProgres }}
      >
        <h1 className="text-[#ebdb04] text-[48px] py-16 font-bold text-center">
          Moje zasilanie
        </h1>
        <div className="w-full flex justify-center gap-x-10">
          <Link to="moje-zasilanie" smooth={true} duration={500}>
            <div
              className="max-w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-700 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300 select-none z"
              onClick={() => setCalculatorType("home")}
            >
              <FaHome className="text-[64px] mt-4" />
              <p className="mt-3 text-[24px] font-semibold">Dom</p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                commodi doloribus aperiam tenetur repellat nulla quas, labore
                est illo vero atque alias molestias voluptas blanditiis,
                eligendi, aspernatur et ducimus eius! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eum, fugit vel atque eveniet fuga,
                officia velit repudiandae distinctio vitae obcaecati suscipit
                aut odit repellendus labore. Tempora eaque explicabo dolor
                officia.
              </p>
            </div>
          </Link>

          <Link to="moje-zasilanie" smooth={true} duration={500}>
            <div
              className="max-w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-700 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300 select-none"
              onClick={() => setCalculatorType("company")}
            >
              <HiOutlineOfficeBuilding className="text-[64px] mt-4" />
              <p className="mt-3 text-[24px] font-semibold">Firma</p>
              <p className="mt-4">
                Tutaj zobaczymy jakieś hasła albo istotne rzeczy jedno pod
                drugim, zamiast całego tego tekstu tenetur repellat nulla quas,
                labore est illo vero atque alias molestias voluptas blanditiis,
                eligendi, aspernatur et ducimus eius! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eum, fugit vel atque eveniet fuga,
                officia velit repudiandae distinctio vitae obcaecati suscipit
                aut odit repellendus labore. Tempora eaque explicabo dolor
                officia.
              </p>
            </div>
          </Link>

          <Link to="moje-zasilanie" smooth={true} duration={500}>
            <div
              className="max-w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-700 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300 select-none"
              onClick={() => setCalculatorType("construction")}
            >
              <MdConstruction className="text-[64px] mt-4" />
              <p className="mt-3 text-[24px] font-semibold">Budowa</p>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                commodi doloribus aperiam tenetur repellat nulla quas, labore
                est illo vero atque alias molestias voluptas blanditiis,
                eligendi, aspernatur et ducimus eius! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Eum, fugit vel atque eveniet fuga,
                officia velit repudiandae distinctio vitae obcaecati suscipit
                aut odit repellendus labore. Tempora eaque explicabo dolor
                officia.
              </p>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

const MojeZasilanie = () => {
  const { calculatorType } = useContext(CalculatorContext);

  return (
    <>
      {calculatorType === null && <TopContent />}
      {calculatorType === "home" && <Calculator />}
      {calculatorType === "company" && <CompanyCalculator />}
      {calculatorType === "construction" && <ConstructionCalculator />}
    </>
  );
};

export default MojeZasilanie;
