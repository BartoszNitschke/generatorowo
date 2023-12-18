import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidCarGarage } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const MojeZasilanie = () => {
  return (
    <div
      name="moje-zasilanie"
      className="w-full h-screen bg-gradient-to-b from-[#202020] to-[#282828] flex flex-col justify-center items-center"
    >
      <h1 className="text-[#ebdb04] text-[48px] py-16 font-bold">
        Wybierz dla siebie
      </h1>
      <div className="w-[60%] flex justify-between">
        <div className="w-[320px] bg-gradient-to-b from-gray-700 via-gray-800 to-gray-700 flex flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-600 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300">
          <FaHome className="text-[64px] mt-4" />
          <p className="mt-3 text-[24px] font-semibold">Dom</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            commodi doloribus aperiam tenetur repellat nulla quas, labore est
            illo vero atque alias molestias voluptas blanditiis, eligendi,
            aspernatur et ducimus eius! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eum, fugit vel atque eveniet fuga, officia velit
            repudiandae distinctio vitae obcaecati suscipit aut odit repellendus
            labore. Tempora eaque explicabo dolor officia.
          </p>
        </div>

        <div className="w-[320px] bg-gradient-to-b from-gray-700 via-gray-800 to-gray-700 flex flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-600 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300">
          <BiSolidCarGarage className="text-[64px] mt-4" />
          <p className="mt-3 text-[24px] font-semibold">Garaż</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            commodi doloribus aperiam tenetur repellat nulla quas, labore est
            illo vero atque alias molestias voluptas blanditiis, eligendi,
            aspernatur et ducimus eius! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eum, fugit vel atque eveniet fuga, officia velit
            repudiandae distinctio vitae obcaecati suscipit aut odit repellendus
            labore. Tempora eaque explicabo dolor officia.
          </p>
        </div>

        <div className="w-[320px] bg-gradient-to-b from-gray-700 via-gray-800 to-gray-700 flex flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-600 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300">
          <HiOutlineOfficeBuilding className="text-[64px] mt-4" />
          <p className="mt-3 text-[24px] font-semibold">Firma</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            commodi doloribus aperiam tenetur repellat nulla quas, labore est
            illo vero atque alias molestias voluptas blanditiis, eligendi,
            aspernatur et ducimus eius! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eum, fugit vel atque eveniet fuga, officia velit
            repudiandae distinctio vitae obcaecati suscipit aut odit repellendus
            labore. Tempora eaque explicabo dolor officia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MojeZasilanie;
