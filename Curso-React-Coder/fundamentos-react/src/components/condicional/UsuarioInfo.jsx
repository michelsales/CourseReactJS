import React from "react";
import If, { Else } from "./If";

export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo<span>{usuario.nome}</span>
        <Else>Seja bem vindo Amigão</Else>
      </If>
    </div>
  );
};
