import React from "react";
import Card from "../Card";

function Soma(props) {
  const { max, min } = props;
  return (
    <Card title="Soma dos numeros" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{max + min} </strong>
        </span>
      </div>
    </Card>
  );
}

export default Soma;
