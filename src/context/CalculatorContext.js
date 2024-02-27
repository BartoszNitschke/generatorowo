import React, { createContext, useState } from "react";

export const CalculatorContext = createContext();

export const CalculatorContextProvider = ({ children }) => {
  const [calculatorType, setCalculatorType] = useState(null);

  return (
    <CalculatorContext.Provider value={{ calculatorType, setCalculatorType }}>
      {children}
    </CalculatorContext.Provider>
  );
};
