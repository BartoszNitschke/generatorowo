import React, { useEffect, useState, useRef } from "react";
import { db } from "../lib/firebaseConfig.js";
import { getDocs, collection } from "firebase/firestore";
import ExampleGenerator from "../assets/homepage_generator.png";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import FormWithDevices from "./FormWithDevices.jsx";

async function fetchDataFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "generators"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}

const Results = () => {
  const [generators, setGenerators] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [sumPower, setSumPower] = useState(
    JSON.parse(localStorage.getItem("power")) || 0
  );
  const [generatorIndex, setGeneratorIndex] = useState(0);
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromFirestore();
      setGenerators(data);
      setFetched(true);
      console.log("fetched");
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (generators.length > 0) {
      const filteredAndSorted = generators
        .filter((generator) => generator.power >= sumPower)
        .sort((a, b) => a.power - b.power);

      setGenerators(filteredAndSorted);

      if (filteredAndSorted.length === 0) {
        setNoResultsFound(true);
      } else {
        setNoResultsFound(false);
      }
    }
  }, [fetched]);

  const increaseIndex = () => {
    if (generatorIndex + 3 < generators.length) {
      setGeneratorIndex(generatorIndex + 1);
    }
  };

  const decreaseIndex = () => {
    if (generatorIndex > 0) {
      setGeneratorIndex(generatorIndex - 1);
    }
  };

  if (!fetched) {
    return (
      <div className="h-[300px] bg-gradient-to-b from-[#111111] to-[#111111] flex items-center justify-center pt-[80px]">
        <AiOutlineLoading3Quarters className="text-white animate-spin text-[64px] font-semibold"></AiOutlineLoading3Quarters>
      </div>
    );
  }

  return (
    <div className=" bg-gradient-to-b from-[#111111] to-[#111111] flex flex-col items-center justify-center overflow-hidden  pt-[100px] pb-[40px]">
      <div className="flex gap-x-16 items-center">
        <FiChevronsLeft
          onClick={decreaseIndex}
          className={
            generatorIndex > 0
              ? "text-gray-300 text-[120px] cursor-pointer hover:text-gray-100"
              : "text-transparent text-[120px]"
          }
        ></FiChevronsLeft>
        {generators &&
          generators
            .slice(generatorIndex, generatorIndex + 3)
            .map((generator) => (
              <div
                key={generator.id}
                className="flex flex-col justify-center items-center min-w-[250px] hover:scale-105 transition-all duration-150 cursor-pointer"
              >
                <img
                  src={ExampleGenerator}
                  className="w-[300px] select-none"
                  alt={generator.name}
                  style={{ flexShrink: 0 }}
                />
                <p className="text-[24px] text-white">{generator.name}</p>
                <p className="text-[20px] text-white">
                  Maksymalna moc:{" "}
                  <span className="font-semibold text-[#ebdb04]">
                    {generator.power}{" "}
                  </span>{" "}
                  W
                </p>
              </div>
            ))}

        {noResultsFound && (
          <p className="text-gray-300 font-semibold text-[40px] py-12">
            Brak pasujących generatorów
          </p>
        )}

        <FiChevronsRight
          onClick={increaseIndex}
          className={
            generatorIndex + 3 < generators.length
              ? "text-gray-300 text-[120px] cursor-pointer hover:text-gray-100"
              : "text-transparent text-[120px]"
          }
        ></FiChevronsRight>
      </div>
      <p className="pt-[80px] text-[24px] text-gray-300">
        Masz więcej pytań?{" "}
        <span
          onClick={() => setFormVisible(true)}
          className="text-[#ebdb04] font-semibold cursor-pointer"
        >
          Wyślij nam swoje wyniki!
        </span>
      </p>
      {formVisible && <FormWithDevices />}
    </div>
  );
};

export default Results;
