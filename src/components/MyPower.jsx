import React, { useState, useEffect } from "react";
import { FaHome, FaChevronDown, FaPlus, FaMinus } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdConstruction, MdDelete } from "react-icons/md";
import { db } from "../lib/firebaseConfig.js";
import { getDocs, collection } from "firebase/firestore";
import Generator1 from "../assets/test_generator1.png";
import Generator2 from "../assets/test_generator2.png";
import Generator3 from "../assets/test_generator3.png";

const devicesPower = {
  Lodówka: 900,
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

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "devices"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}

const MojeZasilanie = () => {
  const [devicesData, setDevicesData] = useState([]);
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);
  const [sumPower, setSumPower] = useState(
    JSON.parse(localStorage.getItem("sumPower")) || 0
  );
  const [chosenDevices, setChosenDevices] = useState(
    JSON.parse(localStorage.getItem("chosenDevices")) || []
  );
  const [addedDevices, setAddedDevices] = useState(
    JSON.parse(localStorage.getItem("addedDevices")) || []
  );
  const [selectedOption, setSelectedOption] = useState("");
  const [newDeviceName, setNewDeviceName] = useState("");
  const [newDevicePower, setNewDevicePower] = useState("");
  const [showGenerators, setShowGenerators] = useState(false);

  const handleCalculatorVisibility = () => {
    setIsCalculatorVisible(!isCalculatorVisible);
    setShowGenerators(false);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setDevicesData(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("addedDevices", JSON.stringify(addedDevices));
  }, [addedDevices]);

  useEffect(() => {
    localStorage.setItem("chosenDevices", JSON.stringify(chosenDevices));
  }, [chosenDevices]);

  useEffect(() => {
    localStorage.setItem("sumPower", JSON.stringify(sumPower));
  }, [sumPower]);

  const addNewDevice = (e) => {
    e.preventDefault();
    if (newDevicePower > 1) {
      setSumPower((prevSum) => prevSum + newDevicePower);
      setChosenDevices([
        ...chosenDevices,
        { name: newDeviceName, power: newDevicePower, quantity: 1 },
      ]);
      setNewDeviceName("");
      setNewDevicePower("");
    }
  };

  const handleSelectChange = (e) => {
    const selectedDeviceName = e.target.value;

    const deviceExists = chosenDevices.some(
      (device) => device.name === selectedDeviceName
    );

    if (!deviceExists && selectedDeviceName !== "") {
      const selectedDeviceData = devicesData.find(
        (device) => device.name === selectedDeviceName
      );
      const power = selectedDeviceData ? selectedDeviceData.power : 0;
      const category = selectedDeviceData ? selectedDeviceData.category : "";

      setChosenDevices([
        ...chosenDevices,
        { name: selectedDeviceName, power, category, quantity: 1 },
      ]);

      setSumPower((prevSuma) => prevSuma + power);
    }
  };

  const handleDeviceDelete = (deviceToDelete) => {
    const updatedDevices = chosenDevices.filter(
      (device) => device.name !== deviceToDelete.name
    );

    setChosenDevices(updatedDevices);
    setSumPower(
      (prevSum) => prevSum - deviceToDelete.power * deviceToDelete.quantity
    );
  };

  const increaseQuantity = (deviceToUpdate) => {
    const index = chosenDevices.findIndex(
      (device) => device.name === deviceToUpdate.name
    );

    const updatedDevices = [...chosenDevices];
    updatedDevices[index].quantity++;
    setChosenDevices(updatedDevices);
    setSumPower((prevSum) => prevSum + deviceToUpdate.power);
  };

  const decreaseQuantity = (deviceToUpdate) => {
    const index = chosenDevices.findIndex(
      (device) => device.name === deviceToUpdate.name
    );

    if (chosenDevices[index].quantity > 1) {
      const updatedDevices = [...chosenDevices];
      updatedDevices[index].quantity--;

      const newQuantity = updatedDevices[index].quantity;
      const updatedDevice = updatedDevices[index];
      setChosenDevices(updatedDevices);

      setSumPower((prevSum) => prevSum - deviceToUpdate.power);
    } else {
      // Usuń urządzenie z tablicy chosenDevices
      const updatedDevices = chosenDevices.filter(
        (device) => device.name !== deviceToUpdate.name
      );
      setChosenDevices(updatedDevices);

      // Odejmij moc urządzenia pomnożoną przez jego ilość
      setSumPower(
        (prevSum) => prevSum - deviceToUpdate.power * deviceToUpdate.quantity
      );
    }
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
        <div className=" text-center w-full max-w-[85%] mx-auto">
          <p className="text-[#ebdb04] text-[32px] font-semibold mt-[100px] ">
            Twój kalkulator mocy
          </p>
          <div className="pt-12 flex justify-center text-gray-300">
            <div className="flex flex-col items-center w-[50%]">
              <p className="text-[24px] font-semibold pb-8 text-[#ebdb04]">
                Wybierz urządzenia
              </p>
              <div className="flex flex-col items-center gap-y-6">
                {devicesData && (
                  <div>
                    <form>
                      <div className="flex justify-center relative w-[500px] h-[50px]">
                        <select
                          className=" border-none appearance-none py-3 w-full text-white bg-gray-800 text-[20px] px-3 outline-none cursor-pointer"
                          onChange={handleSelectChange}
                          value={"RTV AGD"}
                        >
                          <option value="" className="cursor-pointer">
                            RTV AGD
                          </option>
                          {devicesData.map((device) => {
                            if (device.category === "RTVAGD") {
                              return (
                                <option value={device.name}>
                                  {device.name}
                                </option>
                              );
                            } else {
                              return <></>;
                            }
                          })}
                        </select>
                        <div className="w-[50px] h-full absolute right-0 flex items-center justify-center pointer-events-none">
                          <FaChevronDown className=""></FaChevronDown>
                        </div>
                      </div>
                    </form>
                    <form>
                      <div className="flex justify-center relative w-[500px] h-[50px] mt-4">
                        <select
                          className=" border-none appearance-none py-3 w-full text-white bg-gray-800 text-[20px] px-3 outline-none cursor-pointer"
                          onChange={handleSelectChange}
                          value={"Narzędzia"}
                        >
                          <option value="" className="cursor-pointer">
                            Narzędzia
                          </option>
                          {devicesData.map((device) => {
                            if (device.category === "narzędzia") {
                              return (
                                <option value={device.name}>
                                  {device.name}
                                </option>
                              );
                            } else {
                              return <></>;
                            }
                          })}
                        </select>
                        <div className="w-[50px] h-full absolute right-0 flex items-center justify-center pointer-events-none">
                          <FaChevronDown className=""></FaChevronDown>
                        </div>
                      </div>
                    </form>

                    <form>
                      <div className="flex justify-center relative w-[500px] h-[50px] mt-4">
                        <select
                          className=" border-none appearance-none py-3 w-full text-white bg-gray-800 text-[20px] px-3 outline-none cursor-pointer"
                          onChange={handleSelectChange}
                          value={"Ogrzewanie"}
                        >
                          <option value="" className="cursor-pointer">
                            Ogrzewanie
                          </option>
                          {devicesData.map((device) => {
                            if (device.category === "ogrzewanie") {
                              return (
                                <option value={device.name}>
                                  {device.name}
                                </option>
                              );
                            } else {
                              return <></>;
                            }
                          })}
                        </select>
                        <div className="w-[50px] h-full absolute right-0 flex items-center justify-center pointer-events-none">
                          <FaChevronDown className=""></FaChevronDown>
                        </div>
                      </div>
                    </form>

                    <form>
                      <div className="flex justify-center relative w-[500px] h-[50px] mt-4">
                        <select
                          className=" border-none appearance-none py-3 w-full text-white bg-gray-800 text-[20px] px-3 outline-none cursor-pointer"
                          onChange={handleSelectChange}
                          value={"Inne"}
                        >
                          <option value="" className="cursor-pointer">
                            Inne
                          </option>
                          {devicesData.map((device) => {
                            if (device.category === "inne") {
                              return (
                                <option value={device.name}>
                                  {device.name}
                                </option>
                              );
                            } else {
                              return <></>;
                            }
                          })}
                        </select>
                        <div className="w-[50px] h-full absolute right-0 flex items-center justify-center pointer-events-none">
                          <FaChevronDown className=""></FaChevronDown>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              <p className="text-[24px] font-semibold py-4 mt-8 text-[#ebdb04]">
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
                    className="text-[18px] text-black rounded-md outline-none py-1 px-1 bg-gray-200"
                    required={true}
                  />
                  <input
                    type="number"
                    placeholder="Moc (W)"
                    className="mx-3 w-[100px] text-[18px] text-black rounded-md outline-none py-1 px-1 bg-gray-200"
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

            <div className="w-[12%]"></div>

            <div className="flex flex-col relative w-[38%] ">
              <p className="text-[24px] font-semibold text-[#ebdb04]">
                Wybrane
              </p>
              <ul className="pt-6 text-left">
                {chosenDevices &&
                  chosenDevices.map((device, index) => {
                    return (
                      <li className="text-[24px] flex justify-between gap-x-10 py-1 border-b-[1px] border-gray-200 select-none">
                        <p>{device.name}</p>
                        <div className="flex gap-x-5">
                          <p className="">{device.power} W</p>
                          <div className="flex items-center gap-x-2 ">
                            <p className="text-[#ebdb04]">x{device.quantity}</p>
                            <FaMinus
                              onClick={() => decreaseQuantity(device)}
                              className="cursor-pointer hover:text-white transition-all duration-75"
                            ></FaMinus>
                            <FaPlus
                              onClick={() => increaseQuantity(device)}
                              className="cursor-pointer hover:text-white transition-all duration-75"
                            ></FaPlus>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                {chosenDevices.length === 0 && (
                  <p className="text-center text-[18px] font-semibold py-3">
                    Nie dodano jeszcze urządzeń
                  </p>
                )}
              </ul>
              <div className="mt-4 flex flex-col justify-center items-center text-[24px] py-2 text-center">
                <div className="flex">
                  <p className="text-gray-300">Twoja moc: </p>
                  <p className="w-[120px] bg-gray-200 border-2 border-black text-gray-900 ml-2">
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
            </div>
          </div>

          {showGenerators && (
            <div className="flex gap-x-4 mt-14 justify-center">
              <img src={Generator1} alt="" className="w-[200px]" />
              <img src={Generator2} alt="" className="w-[200px]" />
              <img src={Generator3} alt="" className="w-[200px]" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MojeZasilanie;
