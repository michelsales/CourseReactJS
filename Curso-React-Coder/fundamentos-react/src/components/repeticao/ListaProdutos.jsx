import React from "react";
import produtos from "../../data/produtos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const table = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? 'par' : 'impar' }>
        <td>{produto.id}</td>
        <td>R$:{produto.preco.toFixed(2).replace('.', ',')}</td>
      </tr>
    );
  });

  return (
    <div>
      <table border="1">
        <tr>
          <th>Id:</th>
          <th>Preço:</th>
        </tr>
        {table}
      </table>
    </div>
  );
};
