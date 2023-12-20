import React from "react";
import { Link } from "react-scroll";
import KaltmannLogo from "../assets/kaltmann_logo_yellow.png";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[400px] bg-gray-800 flex flex-col items-center justify-center">
      <div className="w-[70%] flex items-start justify-evenly">
        <img src={KaltmannLogo} alt="" className="w-[230px]" />
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
          <h1 className="font-semibold text-[20px] pb-3">Kontakt</h1>
          <p className="py-1">przyklad@gt-corp.pl</p>
          <p className="py-1">94 997 12 12</p>
          <p className="py-1">Urzędnicza 3, 12-122 Paryż</p>
        </div>
        <a target="_blank" href="https://www.facebook.com/kaltmannmaschinen">
          <FaFacebook
            className="bg-transparent text-gray-300 cursor-pointer"
            style={{ width: "50px", height: "50px" }}
          ></FaFacebook>
        </a>
      </div>
      <div className="w-[70%] flex flex-col items-center justify-center text-gray-300 text-center mt-16">
        <p>Copyright © 2023 Kaltmann Maschinen. All rights reserved </p>
        <p>Projekt i wykonanie: Bartosz Nitschke</p>
      </div>
    </div>
  );
};

export default Footer;
