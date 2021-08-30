import "./index.css";
import React from "react";
import Card from "../Card";

function Interval(props) {
  const { min, max } = props;

  return (
    <Card title="Intervalo de numeros" red>
      <div className="Interval">
        <span>
          <strong>Mínimo: </strong>
          <input
            type="number"
            value={0}
            readOnly
          />
        </span>
        <span>
          <strong>Máximo: </strong>
          <input
            type="number"
            value={10}
            readOnly
          />
        </span>
      </div>
    </Card>
  );
}

export default Interval;
