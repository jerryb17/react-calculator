import { createContext, useState } from 'react';

export const CalcuContext = createContext();
const CalcuProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0,
  });

  const providerValue = {
    calc,
    setCalc,
  };

  return (
    <CalcuContext.Provider value={providerValue}>
      {children}
    </CalcuContext.Provider>
  );
};

export default CalcuProvider;
