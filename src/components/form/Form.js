import React, { useEffect, useState } from "react";
import { DuesConsumer } from "../../context/DuesProvider";
import "./formStyle.css";
const Form = () => {
  const { calcular, data, setData } = DuesConsumer();

  const handleCalcular = (e) => {
    e.preventDefault();
    
    setData({
      initialPrice: parseInt(e.target[0].value),
      inflacion: parseInt(e.target[1].value) / 100,
      cuotas: parseInt(e.target[2].value),
    });
  };

  return (
    <form className="main__form" onSubmit={handleCalcular}>
      <div className="main__form__inputs">
        <input
          className="main__form__left"
          type="number"
          placeholder="Precio"
          required={true}   
        />
        <input
          className="main__form__middle"
          type="number"
          placeholder="Inflacion mensual"
          required={true}
        />
        <input
          className="main__form__right"
          type="number"
          placeholder="Cuotas"
          required={true}
        />
      </div>
      <button className="main__form__button">Calcular</button>
    </form>
  );
};

export default Form;
