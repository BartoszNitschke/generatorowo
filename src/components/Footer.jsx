import React from "react";
import { Link } from "react-scroll";
import KaltmannLogo from "../assets/kaltmann_logo_yellow.png";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full md:h-[400px] bg-gray-800 flex flex-col items-center justify-center pb-8 md:pb-0">
      <div className="w-[70%] flex flex-col md:flex-row md:items-start md:justify-evenly">
        <img
          src={KaltmannLogo}
          alt=""
          className="w-[230px] mx-auto md:mx-0 py-4 md:py-0"
        />
        <div className="text-gray-300 flex flex-col text-center">
          <h1 className="font-semibold text-[20px] pb-3">Menu</h1>
          <p className="py-1 cursor-pointer">
            <Link to="moje-zasilanie" smooth={true} duration={500}>
              Moje Zasilanie
            </Link>
          </p>
          <p className="py-1 cursor-pointer">
            <Link to="wiedza" smooth={true} duration={500}>
              Wiedza
            </Link>
          </p>
          <p className="py-1">Generatory</p>
          <p className="py-1">Akcesoria</p>
          <p className="py-1">Części zamienne</p>
        </div>
        <div className="text-gray-300 flex flex-col text-center">
          <h1 className="font-semibold text-[20px] pb-3 pt-10 md:pt-0  ">
            Kontakt
          </h1>
          <p className="py-1">przyklad@gt-corp.pl</p>
          <p className="py-1">94 997 12 12</p>
          <p className="py-1">Urzędnicza 3, 12-122 Paryż</p>
        </div>
        <a target="_blank" href="https://www.facebook.com/kaltmannmaschinen">
          <FaFacebook
            className="bg-transparent text-gray-300 cursor-pointer mx-auto md:mx-0 mt-6 md:mt-0"
            style={{ width: "50px", height: "50px" }}
          ></FaFacebook>
        </a>
      </div>
      <div className="md:w-[70%] w-[80%] flex flex-col items-center justify-center text-gray-300  text-center md:mt-16 mt-10">
        <p>Copyright © 2024 Kaltmann Maschinen. All rights reserved </p>
        <p>
          Projekt i wykonanie:{" "}
          <span className="font-semibold">Bartosz Nitschke</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
