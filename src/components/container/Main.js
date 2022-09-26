import React, { useState } from "react";
import Form from "../form/Form";
import List from "../listado/List";
import Result from "../result/Result";
import './mainStyle.css'

const Main = () => {
  return (
    <div className="main__container">
      <h1>Calculo de Precio</h1>
      <Form />
      <Result />
      <List />
    </div>
  );
};

export default Main;
