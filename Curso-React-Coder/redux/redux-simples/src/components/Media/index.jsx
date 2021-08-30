import React from "react";
import Card from "../Card";

function Media(props) {
  const { max, min} = props
  return (
    <Card title="Média dos numeros" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min) / 2 } </strong>
        </span>
      </div>
    </Card>
  );
}

export default Media;
