import React, { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [valor, setValor] = useState("");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div>
      <h2>{valor}</h2>
      {/* controlado*/}
      <input value={valor} onChange={quandoMudar} />
      {/* somente leitura*/}
      <input value={valor} readOnly />
      {/* nao controlado*/}
      <input value={undefined} />
    </div>
  );
};
