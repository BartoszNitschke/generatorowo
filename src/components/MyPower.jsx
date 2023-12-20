import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidCarGarage } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import Generator1 from "../assets/test_generator1.png";
import Generator2 from "../assets/test_generator2.png";
import Generator3 from "../assets/test_generator3.png";

const devicesPower = {
  kaloryfer: 100,
  mikrofala: 200,
  plytaGrzewcza: 150,
  piekarnik: 300,
  komputer: 400,
  telewizor: 250,
};

const MojeZasilanie = () => {
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);
  const [sumPower, setSumPower] = useState(0);
  const [chosenDevices, setChosenDevices] = useState([]);
  const [newDevice, setNewDevice] = useState("");
  const [showGenerators, setShowGenerators] = useState(false);

  const handleCalculatorVisibility = () => {
    setIsCalculatorVisible(!isCalculatorVisible);
    setSumPower(0);
    setChosenDevices([]);
    setShowGenerators(false);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setNewDevice(parseInt(e.target.value));
  };

  const addNewDevice = () => {
    setSumPower((prevSum) => prevSum + newDevice);
    setNewDevice("");
  };

  const handleCheckboxChange = (nazwaUrzadzenia, isChecked) => {
    setSumPower((prevSuma) => {
      if (isChecked) {
        setChosenDevices([...chosenDevices, nazwaUrzadzenia]);
        return prevSuma + devicesPower[nazwaUrzadzenia];
      } else {
        setChosenDevices((prevDevices) =>
          prevDevices.filter((device) => device !== nazwaUrzadzenia)
        );
        return prevSuma - devicesPower[nazwaUrzadzenia];
      }
    });
  };

  const handleSearchVisibility = () => {
    setShowGenerators(!showGenerators);
  };

  return (
    <div
      name="moje-zasilanie"
      className="w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#131313] flex flex-col justify-center items-center"
    >
      <h1 className="text-[#ebdb04] text-[48px] py-16 font-bold">
        Moje zasilanie
      </h1>
      <div className="w-full flex justify-center gap-x-10">
        <div
          className="max-w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-700 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300 select-none"
          onClick={handleCalculatorVisibility}
        >
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

        <div
          className="max-w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-700 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300 select-none"
          onClick={handleCalculatorVisibility}
        >
          <BiSolidCarGarage className="text-[64px] mt-4" />
          <p className="mt-3 text-[24px] font-semibold">Garaż</p>
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

      {isCalculatorVisible && (
        <div className="flex-col text-center">
          <p className="text-white text-[24px] mt-16">Twój kalkulator mocy</p>
          <div className="flex flex-col">
            <div className="pt-8 flex flex-col justify-center items-center text-white">
              <div className="flex">
                <input
                  type="checkbox"
                  name="kaloryfer"
                  id="kaloryfer"
                  className="mx-3"
                  onChange={(e) =>
                    handleCheckboxChange("kaloryfer", e.target.checked)
                  }
                />
                <label htmlFor="kaloryfer">Kaloryfer</label>

                <input
                  type="checkbox"
                  name="mikrofala"
                  id="mikrofala"
                  className="mx-3"
                  onChange={(e) =>
                    handleCheckboxChange("mikrofala", e.target.checked)
                  }
                />
                <label htmlFor="mikrofala">Mikrofala</label>

                <input
                  type="checkbox"
                  name="plytaGrzewcza"
                  id="plytaGrzewcza"
                  className="mx-3"
                  onChange={(e) =>
                    handleCheckboxChange("plytaGrzewcza", e.target.checked)
                  }
                />
                <label htmlFor="plytaGrzewcza">Płyta grzewcza</label>

                <input
                  type="checkbox"
                  name="piekarnik"
                  id="piekarnik"
                  className="mx-3"
                  onChange={(e) =>
                    handleCheckboxChange("piekarnik", e.target.checked)
                  }
                />
                <label htmlFor="piekarnik">Piekarnik</label>

                <input
                  type="checkbox"
                  name="komputer"
                  id="komputer"
                  className="mx-3"
                  onChange={(e) =>
                    handleCheckboxChange("komputer", e.target.checked)
                  }
                />
                <label htmlFor="komputer">Komputer</label>

                <input
                  type="checkbox"
                  name="telewizor"
                  id="telewizor"
                  className="mx-3"
                  onChange={(e) =>
                    handleCheckboxChange("telewizor", e.target.checked)
                  }
                />
                <label htmlFor="telewizor">Telewizor</label>
              </div>
              <div className="flex my-2">
                <label htmlFor="urzadzenie">Dodaj urządzenie</label>
                <input
                  type="number"
                  name="urzadzenie"
                  id="urzadzenie"
                  placeholder="Podaj moc urządzenia"
                  className="mx-3 text-black"
                  value={newDevice}
                  onChange={handleInputChange}
                />
                <button
                  onClick={addNewDevice}
                  className="bg-white border-2 border-black text-black px-2 cursor-pointer"
                >
                  Dodaj
                </button>
              </div>
              <p>
                {" "}
                // Powyższe opcje będą po lewej stronie panelu z ikonkami,
                roboczo są w jednej linii
              </p>
              <div className="flex my-4 text-[#ebdb04] font-semibold">
                {chosenDevices.map((device) => {
                  return (
                    <p className="mx-3 text-[18px]">
                      {device} - {devicesPower[device]}
                    </p>
                  );
                })}
              </div>
              <div className="flex justify-center items-center text-[24px] py-2 text-center">
                <p>Twoja moc: </p>
                <p className="w-[100px] bg-white border-2 border-black text-black ml-2">
                  {sumPower}
                </p>
              </div>
              <button
                onClick={handleSearchVisibility}
                className="bg-white border-2 border-black text-black px-2 cursor-pointer"
              >
                Wyszukaj
              </button>
              {showGenerators && (
                <div className="flex gap-x-4 mt-4">
                  <img src={Generator1} alt="" className="w-[200px]" />
                  <img src={Generator2} alt="" className="w-[200px]" />
                  <img src={Generator3} alt="" className="w-[200px]" />
                </div>
              )}
              <p className="py-2">
                // Ta część będzie po prawej stronie razem z listą co zaznaczono
                i odpowiednimi mocami dla każego urządzenia, w przypadku dodania
                urządzenia, oprócz mocy będzie jeszcze miejsce na wpisanie nazwy
                i to również wyświetli się na liście
              </p>
              <p className="py-2">
                // W zależności od wybranej opcji (dom, garaż, firma) będą
                pojawiać się różne urządzenia{" "}
              </p>
              <p className="py-2">
                // Całość czysto poglądowo, styl będzie zrobiony po ustaleniu
                dokładnej funkcjonalności
              </p>
              <p>
                // Nachodzące na pasek nawigacyjny elementy będą naprawione w
                późniejszych aktualizacjach
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MojeZasilanie;
