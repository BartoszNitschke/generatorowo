import React, { useState } from "react";
import { FaHome, FaPlus } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdConstruction } from "react-icons/md";
import Generator1 from "../assets/test_generator1.png";
import Generator2 from "../assets/test_generator2.png";
import Generator3 from "../assets/test_generator3.png";

const devicesPower = {
  Lodówka: 350,
  Mikrofalówka: 1000,
  Zmywarka: 1800,
  Ekspres: 1000,
  Telewizor: 250,
  Komputer: 500,
  Laptop: 80,
  Żelazko: 1500,
  Odkurzacz: 1200,
  Suszarka: 1200,
  Lampka: 30,
  Czajnik: 1800,
  Żarówka: 60,
};

const MojeZasilanie = () => {
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);
  const [sumPower, setSumPower] = useState(0);
  const [chosenDevices, setChosenDevices] = useState([]);
  const [addedDevices, setAddedDevices] = useState([]);
  const [newDeviceName, setNewDeviceName] = useState("");
  const [newDevicePower, setNewDevicePower] = useState("");
  const [showGenerators, setShowGenerators] = useState(false);

  const handleCalculatorVisibility = () => {
    setIsCalculatorVisible(!isCalculatorVisible);
    setSumPower(0);
    setChosenDevices([]);
    setShowGenerators(false);
  };

  const addNewDevice = (e) => {
    e.preventDefault();
    setSumPower((prevSum) => prevSum + newDevicePower);
    setAddedDevices([
      ...addedDevices,
      { name: newDeviceName, power: newDevicePower },
    ]);
    setNewDeviceName("");
    setNewDevicePower("");
  };

  const handleDeviceDelete = (deviceToDelete) => {
    const updatedDevices = addedDevices.filter(
      (device) => device !== deviceToDelete
    );
    setAddedDevices(updatedDevices);
    setSumPower((prevSum) => {
      return prevSum - deviceToDelete.power;
    });
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
          className="max-w-[320px] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 flex flex-col justify-center items-center p-4 rounded-3xl shadow-lg shadow-gray-700 text-center hover:scale-105 cursor-pointer transition-transform duration-300 text-gray-300 select-none z"
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
          <p className="text-[#ebdb04] text-[32px] font-semibold mt-[100px]">
            Twój kalkulator mocy
          </p>
          <div className="flex flex-col">
            <div className="pt-12 flex justify-center text-white max-w-[85%] mx-auto">
              <div className="flex flex-col w-[50%] items-center">
                <p className="text-[24px] font-semibold pb-8">
                  Wybierz urządzenia
                </p>
                <div className="flex items-center flex-wrap gap-6">
                  <input
                    type="checkbox"
                    name="fridge"
                    id="fridge"
                    className="mr-4 cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Lodówka", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="fridge"
                    className={
                      chosenDevices.includes("Lodówka")
                        ? "before:content-['] before:w-6 before:h-6 before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Lodówka</span>
                  </label>

                  <input
                    type="checkbox"
                    name="microwave"
                    id="microwave"
                    className="cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Mikrofalówka", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="microwave"
                    className={
                      chosenDevices.includes("Mikrofalówka")
                        ? "before:content-['] before:w-6 before:h-6 before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Mikrofalówka</span>
                  </label>

                  <input
                    type="checkbox"
                    name="dishwasher"
                    id="dishwasher"
                    className="cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Zmywarka", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="dishwasher"
                    className={
                      chosenDevices.includes("Zmywarka")
                        ? "before:content-['] before:w-6 before:h-6 before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Zmywarka</span>
                  </label>

                  <input
                    type="checkbox"
                    name="coffeeMachine"
                    id="coffeeMachine"
                    className="cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Ekspres", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="coffeeMachine"
                    className={
                      chosenDevices.includes("Ekspres")
                        ? "before:content-['] before:w-6 before:h-6  before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Ekspres do kawy</span>
                  </label>

                  <input
                    type="checkbox"
                    name="tv"
                    id="tv"
                    className="cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Telewizor", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="tv"
                    className={
                      chosenDevices.includes("Telewizor")
                        ? "before:content-['] before:w-6 before:h-6 before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Telewizor</span>
                  </label>

                  <input
                    type="checkbox"
                    name="pc"
                    id="pc"
                    className="cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Komputer", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="pc"
                    className={
                      chosenDevices.includes("Komputer")
                        ? "before:content-['] before:w-6 before:h-6  before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Komputer</span>
                  </label>

                  <input
                    type="checkbox"
                    name="laptop"
                    id="laptop"
                    className="cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Laptop", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="laptop"
                    className={
                      chosenDevices.includes("Laptop")
                        ? "before:content-['] before:w-6 before:h-6   before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Laptop</span>
                  </label>

                  <input
                    type="checkbox"
                    name="iron"
                    id="iron"
                    className="cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Żelazko", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="iron"
                    className={
                      chosenDevices.includes("Żelazko")
                        ? "before:content-['] before:w-6 before:h-6  before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Żelazko</span>
                  </label>

                  <input
                    type="checkbox"
                    name="vaccum"
                    id="vaccum"
                    className="cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Odkurzacz", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="vaccum"
                    className={
                      chosenDevices.includes("Odkurzacz")
                        ? "before:content-['] before:w-6 before:h-6 before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Odkurzacz</span>
                  </label>

                  <input
                    type="checkbox"
                    name="hairDryer"
                    id="hairDryer"
                    className="cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Suszarka", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="hairDryer"
                    className={
                      chosenDevices.includes("Suszarka")
                        ? "before:content-['] before:w-6 before:h-6 before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Suszarka</span>
                  </label>

                  <input
                    type="checkbox"
                    name="nightLamp"
                    id="nightLamp"
                    className="cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Lampka", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="nightLamp"
                    className={
                      chosenDevices.includes("Lampka")
                        ? "before:content-['] before:w-6 before:h-6 before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Lampka nocna</span>
                  </label>

                  <input
                    type="checkbox"
                    name="kettler"
                    id="kettler"
                    className="cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Czajnik", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="kettler"
                    className={
                      chosenDevices.includes("Czajnik")
                        ? "before:content-['] before:w-6 before:h-6 before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Czajnik</span>
                  </label>

                  <input
                    type="checkbox"
                    name="bulb"
                    id="bulb"
                    className="cursor-pointer opacity-0 absolute"
                    onChange={(e) =>
                      handleCheckboxChange("Żarówka", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="bulb"
                    className={
                      chosenDevices.includes("Żarówka")
                        ? "before:content-['] before:w-6 before:h-6 before:rounded-xl flex before:bg-yellow-300 hover:cursor-pointer  before:transition-all before:duration-150"
                        : "before:content-['] before:w-6 before:h-6 before:border-2 before:border-white  before:rounded-xl flex  hover:cursor-pointer before:transition-all before:duration-150"
                    }
                  >
                    <span className="ml-2 ">Żarówka</span>
                  </label>
                </div>

                <p className="text-[24px] font-semibold py-4">
                  Dodaj własne urządzenie
                </p>
                <form
                  onSubmit={(e) => addNewDevice(e)}
                  className="flex flex-col items-center"
                >
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Nazwa"
                      value={newDeviceName}
                      onChange={(e) => setNewDeviceName(e.target.value)}
                      className="text-[18px] text-black rounded-md outline-none py-1 px-1"
                      required={true}
                    />
                    <input
                      type="number"
                      placeholder="Moc (W)"
                      className="mx-3 w-[100px] text-[18px] text-black rounded-md outline-none py-1 px-1"
                      value={newDevicePower}
                      onChange={(e) =>
                        setNewDevicePower(parseInt(e.target.value))
                      }
                      required={true}
                    />
                  </div>

                  <button className="mt-4 bg-[#ebdb04] text-[24px] text-gray-900 font-semibold px-5 py-1 rounded-xl cursor-pointer ">
                    Dodaj
                  </button>
                </form>
              </div>

              <div className="flex flex-col w-[50%] relative">
                <p className="text-[24px] font-semibold">Wybrane</p>
                <p className="text-[16px]">(Kliknij aby usunąć)</p>
                <ul className="pt-[70px] absolute left-1/2 transform -translate-x-1/2">
                  {chosenDevices.map((device) => {
                    return (
                      <li
                        className="text-[24px] hover:text-red-500 cursor-pointer"
                        onClick={() => handleCheckboxChange(device, false)}
                      >
                        {device} - {devicesPower[device] + " W"}
                      </li>
                    );
                  })}
                  {addedDevices.map((device) => {
                    return (
                      <li
                        className="text-[24px] hover:text-red-500 cursor-pointer"
                        onClick={() => handleDeviceDelete(device)}
                      >
                        {device.name} - {device.power} W
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="mt-4 flex flex-col justify-center items-center text-[24px] py-2 text-center">
              <div className="flex">
                <p className="text-gray-300">Twoja moc: </p>
                <p className="w-[120px] bg-white border-2 border-black text-black ml-2">
                  {sumPower} W
                </p>
              </div>
              <button
                onClick={handleSearchVisibility}
                className="mt-5 bg-[#ebdb04] text-[24px] text-gray-900 font-semibold px-5 py-1 rounded-xl cursor-pointer"
              >
                Wyszukaj
              </button>
            </div>

            {showGenerators && (
              <div className="flex gap-x-4 mt-8 justify-center">
                <img src={Generator1} alt="" className="w-[200px]" />
                <img src={Generator2} alt="" className="w-[200px]" />
                <img src={Generator3} alt="" className="w-[200px]" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MojeZasilanie;
