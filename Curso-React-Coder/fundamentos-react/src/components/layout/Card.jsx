import React from "react";

export default (props) => {
  return (
    <div>
      <div>Conteudo:</div>
      <h1>{props.titulo}</h1>
      <div>
          {props.children}
      </div>
    </div>
  );
};
