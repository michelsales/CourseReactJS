import React from "react";
import produtos from "../../data/produtos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const table = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.preco}</td> 
      </tr>
    );
  });

  return (
    <div>
      <table>
       <tr>
         <th>Id:</th>
         <th>Preço:</th>
       </tr>
         {table}
      </table>
    </div>
  );
};
