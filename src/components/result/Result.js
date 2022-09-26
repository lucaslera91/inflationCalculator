import React, { useContext, useState } from "react";
import { DuesConsumer } from "../../context/DuesProvider";
import "./resultStyle.css";
const Result = () => {
  const { suma, data } = DuesConsumer();
  console.log(Number(3245).toLocaleString("es-AR", {minimumFractionDigits: 2}))
  const inflacionAnualizada = (1 + data.inflacion) ** 12 - 1 
  //const sumaFormated = suma.toLocaleString("es-ES", {minimumFractionDigits: 2})
  return (
    <div className="result__container">
      <div>
          <p className="subT">$ a valor actual: </p>
          <p className="result">$ {suma.toLocaleString("es-AR", {minimumFractionDigits: 0})}</p>
      </div>
      <div>
          <p className="subT">% vs Contado: </p>
          <p className="result">{(suma / data.initialPrice * 100).toFixed(2)} %</p>
      </div>
      <div>
          <p className="subT">Inflacion Anualizada: </p>
          <p className="result">{(inflacionAnualizada *100).toFixed(2)} %</p>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Result;
