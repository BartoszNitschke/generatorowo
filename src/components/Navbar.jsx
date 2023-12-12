import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className="h-[100px] w-full fixed flex justify-between items-center px-4 bg-[#ebdb04] text-gray-900 border-b-2 border-gray-900">
      <div>
        <p
          className={!nav ? "block text-[24px] font-semibold ml-16" : "hidden"}
        >
          generatorowo.pl
        </p>
      </div>

      <ul className="hidden md:flex text-[18px] font-bold mr-16">
        <li className="px-4 cursor-pointer hover:translate-y-[-4px] duration-200">
          <Link to="moje-zasilanie" smooth={true} duration={500}>
            Moje Zasilanie
          </Link>
        </li>
        <li className="px-4 cursor-pointer hover:translate-y-[-4px] duration-200">
          <Link to="wiedza" smooth={true} duration={500}>
            Wiedza
          </Link>
        </li>
        <li className="px-4 cursor-pointer hover:translate-y-[-4px] duration-200">
          Generatory
        </li>
        <li className="px-4 cursor-pointer hover:translate-y-[-4px] duration-200">
          Akcesoria
        </li>
        <li className="px-4 cursor-pointer hover:translate-y-[-4px] duration-200">
          Części zamienne
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="text-[24px] mr-4" />
        ) : (
          <FaTimes className="text-[24px] mr-4" />
        )}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "hamburger absolute top-0 left-0 w-full h-screen bg-[#ebdb04] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Moje Zasilanie</li>
        <li className="py-6 text-4xl">Wiedza</li>
        <li className="py-6 text-4xl">Generatory</li>
        <li className="py-6 text-4xl">Akcesoria</li>
        <li className="py-6 text-4xl">Części zamienne</li>
      </ul>

      <div className="hidden"></div>
    </header>
  );
};

export default Navbar;
