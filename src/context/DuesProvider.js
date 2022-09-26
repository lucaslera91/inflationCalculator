import React, { createContext, useContext, useEffect, useState } from "react";

const DuesContext = createContext();

export const DuesConsumer = () => useContext(DuesContext);

const DuesProvider = ({ children }) => {
  const [data, setData] = useState({
    initialPrice: 0,
    inflacion: 0,
    cuotas: 1,
  });
  const [calculos, setCalculos] = useState([]);
  const [suma, setSuma] = useState(0);

  useEffect(() => {
    calcular();
  }, [data]);

  const calcular = () => {
    const { inflacion, initialPrice, cuotas } = data;
    let auxSuma = parseInt(initialPrice / cuotas);
    const listaDeCuotas = [
      { cuota: 1, monto: parseInt(initialPrice / cuotas) },
    ];
    for (let index = 1; index < cuotas; index++) {
      const aux = parseInt(listaDeCuotas[index - 1].monto * (1 - inflacion));
      listaDeCuotas.push({
        cuota: index + 1,
        monto: aux,
      });

      auxSuma += aux;
    }
    setCalculos([...listaDeCuotas]);
    setSuma(auxSuma);
  };

  return (
    <DuesContext.Provider
      value={{
        data,
        setData,
        calcular,
        calculos,
        suma
      }}
    >
      {children}
    </DuesContext.Provider>
  );
};
export default DuesProvider;
