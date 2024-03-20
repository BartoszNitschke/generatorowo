import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import KaltmannLogo from "../assets/kaltmann_logo.png";
import { ReactComponent as Polish } from "../assets/flags/polish.svg";
import { ReactComponent as English } from "../assets/flags/english.svg";
import { ReactComponent as German } from "../assets/flags/german.svg";

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 0, 0.36, 0],
    },
  },
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [languages, setLanguages] = useState(false);
  const languagesRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (languagesRef.current && !languagesRef.current.contains(e.target)) {
        setLanguages(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setLanguages(!languages);
  };

  return (
    <header className="h-[80px] w-full fixed flex justify-between items-center px-4 bg-[#ebdb04] text-gray-900 border-b-2 border-gray-900 z-50">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img
            src={KaltmannLogo}
            alt=""
            className="w-[200px] ml-16 cursor-pointer"
          />
        </Link>
      </div>

      <ul className="hidden md:flex text-[16px] font-bold items-center">
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
        <li
          ref={languagesRef}
          className="px-4 cursor-pointer flex items-center relative"
        >
          <button onClick={toggleDropdown}>
            <Polish></Polish>
          </button>
          {languages && (
            <div className="absolute top-full left-0 mt-1 bg-[#ebdb04] rounded-md">
              <ul className="py-1">
                <li className="px-4 py-2 ">
                  <English></English>
                </li>
                <li className="px-4 py-2 ">
                  <German></German>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="text-[24px] mr-4" />
        ) : (
          <FaTimes className="text-[24px] mr-4" />
        )}
      </div>

      <AnimatePresence>
        {nav && (
          <motion.ul
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={
              "hamburger absolute top-0 left-0 w-full h-screen bg-[#ebdb04] flex flex-col justify-center items-center origin-top"
            }
          >
            <div className="flex gap-x-7">
              <div className="overflow-hidden">
                <motion.div
                  variants={mobileLinkVars}
                  initial="initial"
                  animate="open"
                >
                  <li className="py-5 text-4xl font-semibold">
                    <Link
                      onClick={handleClick}
                      to="moje-zasilanie"
                      smooth={true}
                      duration={500}
                    >
                      <English className="w-[65px] h-[65px] border-[2px] border-white rounded-full"></English>
                    </Link>
                  </li>
                </motion.div>
              </div>

              <div className="overflow-hidden">
                <motion.div
                  variants={mobileLinkVars}
                  initial="initial"
                  animate="open"
                >
                  <li className="py-5 text-4xl font-semibold">
                    <Link
                      onClick={handleClick}
                      to="moje-zasilanie"
                      smooth={true}
                      duration={500}
                    >
                      <German className="w-[65px] h-[65px] border-[2px] border-white rounded-full"></German>
                    </Link>
                  </li>
                </motion.div>
              </div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                variants={mobileLinkVars}
                initial="initial"
                animate="open"
              >
                <li className="py-5 text-4xl font-semibold">
                  <Link
                    onClick={handleClick}
                    to="moje-zasilanie"
                    smooth={true}
                    duration={500}
                  >
                    MOJE ZASILANIE
                  </Link>
                </li>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                variants={mobileLinkVars}
                initial="initial"
                animate="open"
              >
                <li className="py-5 text-4xl font-semibold">
                  <Link
                    onClick={handleClick}
                    to="wiedza"
                    smooth={true}
                    duration={500}
                  >
                    WIEDZA
                  </Link>
                </li>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                variants={mobileLinkVars}
                initial="initial"
                animate="open"
              >
                {" "}
                <li className="py-5 text-4xl font-semibold">GENERATORY</li>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              {" "}
              <motion.div
                variants={mobileLinkVars}
                initial="initial"
                animate="open"
              >
                <li className="py-5 text-4xl font-semibold">AKCESORIA</li>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                variants={mobileLinkVars}
                initial="initial"
                animate="open"
              >
                <li className="py-5 text-4xl font-semibold">CZĘŚCI ZAMIENNE</li>
              </motion.div>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>

      <div className="hidden"></div>
    </header>
  );
};

export default Navbar;
