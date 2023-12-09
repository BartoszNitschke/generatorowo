import React from "react";

const Navbar = () => {
  return (
    <header className="h-[130px] w-full fixed">
      <div className="fixed w-full h-[130px] flex justify-center items-center bg-[#ebdb04] text-gray-900 border-b-2 border-[#BBBBBB] px-4 z-10">
        <div className="w-[85%] max-w-[85%] flex justify-between">
          <p className="text-3xl font-bold">generatorowo.pl</p>
          <ul className="flex px-4 text-xl items-center font-semibold ">
            <li>
              <a className="px-7" href="/moje-zasilanie">
                MOJE ZASILANIE
              </a>
            </li>
            <li>
              <a className="px-7" href="/moje-zasilanie">
                GENERATORY
              </a>
            </li>
            <li>
              <a className="px-7" href="/moje-zasilanie">
                AKCESORIA
              </a>
            </li>
            <li>
              <a className="px-7" href="/moje-zasilanie">
                CZĘŚCI ZAMIENNE
              </a>
            </li>
            <li>
              <a className="px-7" href="/moje-zasilanie">
                WIEDZA
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
