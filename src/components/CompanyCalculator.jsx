import React, { useState, useEffect, useContext } from "react";
import { CalculatorContext } from "../context/CalculatorContext.js";
import { FaChevronDown, FaPlus, FaMinus, FaHome } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdConstruction } from "react-icons/md";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { VscDebugRestart } from "react-icons/vsc";
import { db } from "../lib/firebaseConfig.js";
import { getDocs, collection } from "firebase/firestore";
import Generator1 from "../assets/test_generator1.png";
import Generator2 from "../assets/test_generator2.png";
import Generator3 from "../assets/test_generator3.png";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "devices"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}

const Calculator = () => {
  const { setCalculatorType } = useContext(CalculatorContext);

  const [devicesData, setDevicesData] = useState([]);
  const [sumPower, setSumPower] = useState(
    JSON.parse(localStorage.getItem("power")) || 0
  );
  const [chosenDevices, setChosenDevices] = useState(
    JSON.parse(localStorage.getItem("devices")) || []
  );
  const [newDeviceName, setNewDeviceName] = useState("");
  const [newDevicePower, setNewDevicePower] = useState("");
  const [showGenerators, setShowGenerators] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setDevicesData(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("devices", JSON.stringify(chosenDevices));
  }, [chosenDevices]);

  useEffect(() => {
    localStorage.setItem("power", JSON.stringify(sumPower));
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

      setChosenDevices(updatedDevices);
      setSumPower((prevSum) => prevSum - deviceToUpdate.power);
    } else {
      const updatedDevices = chosenDevices.filter(
        (device) => device.name !== deviceToUpdate.name
      );
      setChosenDevices(updatedDevices);
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
      className="w-full min-h-[80vh] bg-gradient-to-b from-[#0a0a0a] to-[#131313] pt-[180px]"
    >
      <div className=" text-center w-full max-w-[85%] mx-auto">
        <div className="flex justify-center items-center gap-x-4">
          <FiChevronsLeft
            className="text-gray-300 text-[78px] cursor-pointer hover:text-gray-100"
            onClick={() => setCalculatorType("home")}
          ></FiChevronsLeft>
          <FaHome
            className="text-gray-300 text-[78px] bg-gray-800 p-2 rounded-xl cursor-pointer hover:text-gray-100"
            onClick={() => setCalculatorType("home")}
          ></FaHome>
          <HiOutlineOfficeBuilding className="text-[#ebdb04] text-[78px] bg-gray-800 p-2 rounded-xl cursor-pointer "></HiOutlineOfficeBuilding>
          <MdConstruction
            className="text-gray-300 text-[78px] bg-gray-800 p-2 rounded-xl cursor-pointer hover:text-gray-100 "
            onClick={() => setCalculatorType("construction")}
          ></MdConstruction>
          <FiChevronsRight
            className="text-gray-300 text-[78px] cursor-pointer hover:text-gray-100"
            onClick={() => setCalculatorType("construction")}
          ></FiChevronsRight>
        </div>

        <div className="pt-16 flex justify-center text-gray-300">
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
                        className=" border-none appearance-none py-3 w-full text-white bg-gray-800 text-[20px] px-3 outline-none cursor-pointer rounded-md"
                        onChange={handleSelectChange}
                        value={"RTV AGD"}
                      >
                        <option value="" className="cursor-pointer">
                          Firmowe
                        </option>
                        {devicesData.map((device) => {
                          if (
                            device.category === "RTVAGD" ||
                            device.category === "firmowe"
                          ) {
                            return (
                              <option value={device.name}>{device.name}</option>
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
                        className=" border-none appearance-none py-3 w-full text-white bg-gray-800 text-[20px] px-3 outline-none cursor-pointer rounded-md"
                        onChange={handleSelectChange}
                        value={"Narzędzia"}
                      >
                        <option value="" className="cursor-pointer">
                          Narzędzia
                        </option>
                        {devicesData.map((device) => {
                          if (device.category === "narzędzia") {
                            return (
                              <option value={device.name}>{device.name}</option>
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
                        className=" border-none appearance-none py-3 w-full text-white bg-gray-800 text-[20px] px-3 outline-none cursor-pointer rounded-md"
                        onChange={handleSelectChange}
                        value={"Ogrzewanie"}
                      >
                        <option value="" className="cursor-pointer">
                          Ogrzewanie
                        </option>
                        {devicesData.map((device) => {
                          if (device.category === "ogrzewanie") {
                            return (
                              <option value={device.name}>{device.name}</option>
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
                        className=" border-none appearance-none py-3 w-full text-white bg-gray-800 text-[20px] px-3 outline-none cursor-pointer rounded-md"
                        onChange={handleSelectChange}
                        value={"Inne"}
                      >
                        <option value="" className="cursor-pointer">
                          Inne
                        </option>
                        {devicesData.map((device) => {
                          if (device.category === "inne") {
                            return (
                              <option value={device.name}>{device.name}</option>
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

            <p className="text-[24px] font-semibold py-4 mt-14 text-[#ebdb04]">
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
                  className="text-[22px] text-white rounded-md outline-none py-2 px-4 bg-gray-800 placeholder-gray-200"
                  required={true}
                />
                <input
                  type="number"
                  placeholder="Moc (W)"
                  className="mx-3 w-[140px] text-[22px] text-white rounded-md outline-none py-2 px-4 bg-gray-800 placeholder-gray-200 appearance-none"
                  value={newDevicePower}
                  onChange={(e) => setNewDevicePower(parseInt(e.target.value))}
                  required={true}
                />
              </div>

              <button className="mt-6 relative md:inline-flex items-center justify-center w-[180px] h-[50px] text-[20px] bg-gray-800 p-4 px-6 py-3 overflow-hidden font-semibold  transition duration-300 ease-out rounded-full group">
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-jade group-hover:translate-x-0 ease">
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                      fill="#ebdb04"
                      stroke="#ebdb04"
                      strokeWidth="0.5"
                    />
                  </svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-jade transition-all duration-300 transform group-hover:translate-x-full ease">
                  Dodaj
                </span>
              </button>
            </form>
          </div>

          <div className="w-[12%]"></div>

          <div className="flex flex-col relative w-[38%] ">
            <p className="text-[24px] font-semibold text-[#ebdb04]">Wybrane</p>
            <ul className="mt-6 text-left ">
              <li className="text-[24px] flex justify-between items-center gap-x-10 pt-2 pb-5 bg-gray-800 px-4 rounded-t-xl text-[#ebdb04] font-semibold">
                <p className="">Urządzenie</p>
                <div className="flex gap-x-6 items-center">
                  <p>Moc</p>
                  <p>Ilość</p>
                  <VscDebugRestart
                    className="text-[28px] text-gray-300 cursor-pointer hover:text-white"
                    onClick={() => {
                      setChosenDevices([]);
                      setSumPower(0);
                    }}
                  ></VscDebugRestart>
                </div>
              </li>

              {chosenDevices &&
                chosenDevices.map((device, index) => {
                  return (
                    <li className="text-[24px] flex justify-between gap-x-10 py-2 select-none bg-gray-800 px-4 border-b-[1px] border-slate-600 mt-0 last:border-none">
                      <p>{device.name}</p>
                      <div className="flex gap-x-5 items-center">
                        <p className=" whitespace-nowrap">{device.power} W</p>
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
                <p className="text-center text-[18px] font-semibold py-3 bg-gray-800">
                  Nie dodano jeszcze urządzeń
                </p>
              )}
            </ul>

            <div className="text-[24px] flex justify-center gap-x-10 py-2 border-b-[1px] border-slate-900 bg-gray-800 pb-5 rounded-b-xl pt-8">
              <div className="flex gap-x-2 font-semibold">
                <p className="text-[#ebdb04]">Twoja moc:</p>
                <p className="">{sumPower} W</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col justify-center items-center text-[24px] py-2 text-center">
              {/* <div className="flex">
                <p className="text-[#ebdb04] font-semibold">Twoja moc: </p>
                <p className="w-[120px] bg-gray-800 text-gray-300 ml-2 rounded-md">
                  {sumPower} W
                </p>
              </div> */}
              <button className="mt-4 relative md:inline-flex items-center justify-center w-[180px] h-[50px] text-[20px] bg-gray-800 p-4 px-6 py-3 overflow-hidden font-semibold  transition duration-300 ease-out rounded-full group">
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-jade group-hover:translate-y-0 ease">
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                      stroke="#ebdb04"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-jade transition-all duration-300 transform group-hover:translate-y-full ease">
                  Wyszukaj
                </span>
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
    </div>
  );
};

export default Calculator;
