import React from "react";
import { DuesConsumer } from "../../context/DuesProvider";
import './capsuleStyle.css'

const Capsule = ({prop}) => {

  return (
    <div className="main__list__capsule">
      <div>{prop.cuota}</div>
      <div>{prop.monto.toLocaleString("es-AR", {minimumFractionDigits: 0})}</div>
    </div>
  );
};

export default Capsule;
