import React, { useState } from "react";
import { FaHome, FaChevronDown, FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdConstruction, MdDelete } from "react-icons/md";
import Calculator from "./Calculator";

const TopContent = ({ handleCalculatorVisibility }) => (
  <div
    name="moje-zasilanie"
    className="w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#131313] flex flex-col justify-center items-center"
  >
    <h1 className="text-[#ebdb04] text-[48px] py-16 font-bold">
      Moje zasilanie
    </h1>
    <div className="w-full flex justify-center gap-x-10">
      <div
        className="max-w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-700 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300 select-none z"
        onClick={handleCalculatorVisibility}
      >
        <FaHome className="text-[64px] mt-4" />
        <p className="mt-3 text-[24px] font-semibold">Dom</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt commodi
          doloribus aperiam tenetur repellat nulla quas, labore est illo vero
          atque alias molestias voluptas blanditiis, eligendi, aspernatur et
          ducimus eius! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eum, fugit vel atque eveniet fuga, officia velit repudiandae
          distinctio vitae obcaecati suscipit aut odit repellendus labore.
          Tempora eaque explicabo dolor officia.
        </p>
      </div>

      <div
        className="max-w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-700 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300 select-none"
        onClick={handleCalculatorVisibility}
      >
        <HiOutlineOfficeBuilding className="text-[64px] mt-4" />
        <p className="mt-3 text-[24px] font-semibold">Firma</p>
        <p className="mt-4">
          Tutaj zobaczymy jakieś hasła albo istotne rzeczy jedno pod drugim,
          zamiast całego tego tekstu tenetur repellat nulla quas, labore est
          illo vero atque alias molestias voluptas blanditiis, eligendi,
          aspernatur et ducimus eius! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum, fugit vel atque eveniet fuga, officia velit
          repudiandae distinctio vitae obcaecati suscipit aut odit repellendus
          labore. Tempora eaque explicabo dolor officia.
        </p>
      </div>

      <div
        className="max-w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-700 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300 select-none"
        onClick={handleCalculatorVisibility}
      >
        <MdConstruction className="text-[64px] mt-4" />
        <p className="mt-3 text-[24px] font-semibold">Budowa</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt commodi
          doloribus aperiam tenetur repellat nulla quas, labore est illo vero
          atque alias molestias voluptas blanditiis, eligendi, aspernatur et
          ducimus eius! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eum, fugit vel atque eveniet fuga, officia velit repudiandae
          distinctio vitae obcaecati suscipit aut odit repellendus labore.
          Tempora eaque explicabo dolor officia.
        </p>
      </div>
    </div>
  </div>
);

const MojeZasilanie = () => {
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);

  const handleCalculatorVisibility = () => {
    setIsCalculatorVisible(!isCalculatorVisible);
  };

  return (
    <>
      <TopContent handleCalculatorVisibility={handleCalculatorVisibility} />
      {isCalculatorVisible && <Calculator />}
    </>
  );
};

export default MojeZasilanie;
