import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const estilo = {
        backgroundColor: props.color || '#F00'
    }

  return (
    <div style={estilo}>
      <div>Conteudo:</div>
      <h1>{props.titulo}</h1>
      <div>
          {props.children}
      </div>
    </div>
  );
};
