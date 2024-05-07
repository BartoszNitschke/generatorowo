import React, { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorContextProvider = ({ children }) => {
  const [calculatorType, setCalculatorType] = useState(null);
  const [showResults, setShowResults] = useState("false");

  return (
    <CalculatorContext.Provider
      value={{ calculatorType, setCalculatorType, showResults, setShowResults }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
