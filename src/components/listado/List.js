import React, { useState } from "react";
import { DuesConsumer } from "../../context/DuesProvider";
import Capsule from "../capsule/Capsule";
import "./listStyle.css";

const List = () => {
  const { calculos } = DuesConsumer();
  console.log(calculos);

  return (
    <>
      {calculos.length > 0 && calculos[0].monto !== 0 && (
        <div className="main__list">
          <div className="main__list__capsule">
            <div>Cuotas</div>
            <div>Montos</div>
          </div>
          {calculos.map((tag, idx) => (
            <Capsule key={idx} prop={tag} />
          ))}
        </div>
      )}
    </>
  );
};

export default List;
