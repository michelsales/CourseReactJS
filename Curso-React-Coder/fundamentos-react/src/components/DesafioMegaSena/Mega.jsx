import React, { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }
  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }
  const [qtde, setQtde] = useState(props.qtde || 6);
  const [numeros, setNumeros] = useState(Array(qtde).fill(0));

  return (
    <div>
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Qtde: </label>
        <input
          type="number"
          value={qtde}
          onChange={(e) => setQtde(+e.target.value)}
        />
      </div>
      <button onClick={(_) => setNumeros(gerarNumeros(qtde))}>
        Gerar numeros
      </button>
    </div>
  );
};
