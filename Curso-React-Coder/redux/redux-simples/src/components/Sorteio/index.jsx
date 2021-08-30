import React from "react";
import Card from "../Card";

function numberRandom(max, min) {
  const random = parseInt(Math.random() * (max - min)) + min;
  return random;
}

function Sorteio(props) {
  const { max, min } = props;
  return (
    <Card title="Sorteio de um numero" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong> {numberRandom(max, min)} </strong>
        </span>
      </div>
    </Card>
  );
}

export default Sorteio;
